

```console
kind create cluster --config kind-cluster.yaml
````

```console
kubectl apply -f ingress/ingress-config.yaml 
```

```console
kubectl apply -f ingress/ingress-server.yaml
````

```console
kubectl apply -f server-deploy.yaml
```

```console
curl localhost/api1
```

```console
curl localhost/api2
```

