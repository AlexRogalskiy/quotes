# Deploy `styled-quotes`

`styled-quotes` k8s manifests:

- [common](common)
- [backend](backend)

Deploy `styled-quotes` in the `webapp` namespace:

```bash
$ kubectl apply -f ./common
$ kubectl apply -f ./backend
```

Deploy `styled-quotes` in the `dev` namespace:

```bash
$ kustomize build ./overlays/dev | kubectl apply -f-
```

Deploy `styled-quotes` in the `staging` namespace:

```bash
$ kustomize build ./overlays/staging | kubectl apply -f-
```

Deploy `styled-quotes` in the `prod` namespace:

```bash
$ kustomize build ./overlays/prod | kubectl apply -f-
```

## Testing Locally Using Kind

> NOTE: You can install [kind from here](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)

The following will create a new cluster called "styled-quotes" and configure host ports on 8000 and 8443. You can access the endpoints on localhost. The example also
deploys cert-manager within the cluster along with a self-signed cluster issuer used to generate the certificate to validate the secure port.

```bash
$ ./kind.sh
```
