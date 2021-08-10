## Setting base OS layer
## docker build -t container_tag --build-arg IMAGE_SOURCE=node IMAGE_TAG=lts --build-arg TOKEN=<token> .
ARG IMAGE_SOURCE=node
ARG IMAGE_TAG=lts

FROM $IMAGE_SOURCE:$IMAGE_TAG

## General arguments
ARG PYTHON_VERSION=3.8.2

ARG LC_ALL="en_US.UTF-8"
ARG BUILD_DATE="$(date -u +\"%Y-%m-%dT%H:%M:%SZ\")"
ARG VCS_REF="$(git rev-parse --short HEAD)"

ARG NAME="styled-quotes"
ARG VERSION="$(git describe --abbrev=0 --tag)"
ARG PACKAGE="AlexRogalskiy/quotes"
ARG DESCRIPTION="Automatically generate styled SVG quotes upon request"

## Vercel token
ARG VERCEL_TOKEN

## User with uid/gid
ARG USER
ARG UID
ARG GID

## Working directories
ARG APP_DIR="/usr/src/app"
ARG DATA_DIR="/usr/src/data"

## Dependencies
ARG PACKAGES="git curl dumb-init gosu dos2unix locales"

## General metadata
LABEL "name"="$NAME"
LABEL "version"="$VERSION"
LABEL "description"="$DESCRIPTION"

LABEL "com.github.repository"="https://github.com/${PACKAGE}"
LABEL "com.github.homepage"="https://github.com/${PACKAGE}"
LABEL "com.github.documentation"="https://github.com/${PACKAGE}/blob/master/README.md"
LABEL "com.github.maintainer"="Sensiblemetrics, Inc. <hello@sensiblemetrics.io> (https://sensiblemetrics.io)"

LABEL "com.github.version"="$VERSION"
LABEL "com.github.build-date"="$BUILD_DATE"
LABEL "com.github.vcs-ref"="$VCS_REF"

LABEL "com.github.name"="$NAME"
LABEL "com.github.description"="$DESCRIPTION"

## Setting environment variables
ENV PYTHON_VERSION $PYTHON_VERSION

ENV APP_DIR=$APP_DIR \
    DATA_DIR=$DATA_DIR

# System-level base config
ENV TZ=UTC \
    LANGUAGE=en_US:en \
    LC_ALL=$LC_ALL \
    LANG=$LC_ALL \
    PYTHONIOENCODING=UTF-8 \
    PYTHONLEGACYWINDOWSSTDIO=UTF-8 \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    DEBIAN_FRONTEND=noninteractive \
    APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1

ENV PIP_DISABLE_PIP_VERSION_CHECK=1
ENV PIP_NO_CACHE_DIR=1

ENV VERCEL_TOKEN $VERCEL_TOKEN

ENV USER=${USER:-'cukebot'} \
    UID=${UID:-5000} \
    GID=${GID:-10000}

ENV npm_config_loglevel=error
ENV IN_DOCKER=True

## Mounting volumes
VOLUME ["$APP_DIR"]

## Creating work directory
WORKDIR $APP_DIR

# Create a cukebot user. Some tools (Bundler, npm publish) don't work properly
# when run as root
RUN addgroup --gid "$GID" "$USER" || exit 0
RUN adduser \
    --disabled-password \
    --gecos "" \
    --ingroup "$USER" \
    --uid "$UID" \
    --shell /bin/bash \
    "$USER" \
    || exit 0

## Installing dependencies
RUN echo "**** Installing build packages ****"
RUN apt-get update -qq \
    && apt-get install -qq --assume-yes --no-install-recommends $PACKAGES \
    && apt-get autoclean \
    && apt-get clean \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

## Installing python
RUN echo "**** Installing Python ****"
RUN cd /tmp && curl -O https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tar.xz && \
    tar -xvf Python-${PYTHON_VERSION}.tar.xz && \
    cd Python-${PYTHON_VERSION} && \
    ./configure --enable-optimizations && \
    make -j 4 && \
    make altinstall

## Installing vercel
RUN echo "**** Installing build packages ****"
RUN npm install -g npm
RUN npm i -g vercel

## Copying project sources
COPY . ./

## Removing unnecessary dependencies
RUN echo "**** Cleaning Up cache ****"
RUN rm -rf /var/cache/apt/* /tmp/Python-${PYTHON_VERSION}

#RUN dos2unix /bin/docker-command.bash

## Show versions
RUN echo "NPM version: $(npm --version)"
RUN echo "NODE version: $(node --version)"
RUN echo "PYTHON version: $(python3 --version)"

## Installing project dependencies
RUN echo "**** Installing project packages ****"
RUN npm install --no-audit

## Run format checking & linting
RUN npm run test:license

RUN npm cache clean --force

## Run vercel integration
RUN yes | vercel --confirm --token $VERCEL_TOKEN

## Setting volumes
VOLUME /tmp

## Setting user
USER $USER

## Exposing ports
EXPOSE 3000

# Reaping zombie processes
#ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
#ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64 /usr/local/bin/dumb-init
#RUN chmod +x /usr/local/bin/dumb-init
#ENTRYPOINT ["dumb-init", "--"]

## Running package bundle
CMD ["npm", "run", "develop:docker"]
