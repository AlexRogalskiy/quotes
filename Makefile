############################################################################
# Variables
############################################################################

# Since we rely on paths relative to the makefile location, abort if make isn't being run from there.
$(if $(findstring /,$(MAKEFILE_LIST)),$(error Please only invoke this makefile from the directory it resides in))

# SHELL stores the shell that the Makefile uses.
SHELL := /bin/bash -o errexit -o nounset

# UNAME_OS stores the value of uname -s.
UNAME_OS := $(shell uname -s)
# UNAME_ARCH stores the value of uname -m.
UNAME_ARCH := $(shell uname -m | sed s/x86_64/amd64/ | sed s/aarch64/arm64/ | sed s/aarch64_be/arm64/)
# ROOT_DIR stores git root directory
ROOT_DIR := $(shell git rev-parse --show-toplevel)
# ORIGINAL_BRANCH stores git branch name
ORIGINAL_BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
# GIT_SHA stores git last commit hash
GIT_SHA := $(shell git rev-parse HEAD)

IMAGE ?= styled-quotes
TAG ?= latest

# Set V=1 on the command line to turn off all suppression. Many trivial
# commands are suppressed with "@", by setting V=1, this will be turned off.
ifeq ($(V),1)
	AT :=
else
	AT := @
endif

# if this session isn't interactive, then we don't want to allocate a
# TTY, which would fail, but if it is interactive, we do want to attach
# so that the user can send e.g. ^C through.
INTERACTIVE := $(shell [ -t 0 ] && echo 1 || echo 0)
ifeq ($(INTERACTIVE), 1)
	DOCKER_FLAGS += -t
endif

UTILS := docker
# Make sure that all required utilities can be located.
UTIL_CHECK := $(or $(shell which $(UTILS) >/dev/null && echo 'ok'),$(error Did you forget to install `docker` after cloning the repo? At least one of the required supporting utilities not found: $(UTILS)))

# Run all by default when "make" is invoked.
.DEFAULT_GOAL := list

############################################################################
# Common
############################################################################

# Default target (by virtue of being the first non '.'-prefixed in the file).
.PHONY: _no-target-specified
_no-target-specified:
	$(error Please specify the target to make - `make list` shows targets)

# Lists all targets defined in this makefile.
.PHONY: list
list:
	@$(MAKE) -pRrn : -f $(MAKEFILE_LIST) 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | command grep -v -e '^[^[:alnum:]]' -e '^$@$$command ' | sort

# Ensure docker token command.
.PHONY: _ensure-token
_ensure-token:
ifndef TOKEN
	$(error Please invoke with `make TOKEN=<token> docker-build`)
endif

# Ensures that the git workspace is clean.
.PHONY: _ensure-clean
_ensure-clean:
	@[ -z "$$((git status --porcelain --untracked-files=no || echo err) | command grep -v 'CHANGELOG.md')" ] || { echo "Workspace is not clean; please commit changes first." >&2; exit 2; }

.PHONY: info
info: ## Gather information about the runtime environment
	echo "user: $$(whoami)"; \
	echo "directory: $$(pwd)"; \
	echo "ls -ahl: $$(ls -ahl)"; \
	docker images; \
	docker ps

# Run docker build command.
.PHONY: docker-build
docker-build: _ensure-token _ensure-clean
	docker build -f Dockerfile -t $(IMAGE):$(TAG) --build-arg VERCEL_TOKEN=$(TOKEN) .

# Run docker start command.
.PHONY: docker-start
docker-start:
	docker-compose -f docker-compose.yml up -d

# Run docker stop command.
.PHONY: docker-stop
docker-stop:
	docker-compose -f docker-compose.yml down -v --remove-orphans

# Run tilt start command.
.PHONY: tilt-start
tilt-start:
	tilt up

# Run tilt stop command.
.PHONY: tilt-stop
tilt-stop:
	tilt down --delete-namespaces
