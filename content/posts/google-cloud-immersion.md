---
title: "Google Cloud Immersion Program"
tags: "google-cloud, containers, networking, devops, cicd"
date: "2022-11-24"
author: "Natasha"
---

Our team was invited to attend a Google Cloud Immersion Program on 24 Nov, 2022. Members across SES and RDO came to the Google Asia Office for the first time to learn about networking and security on the Google Cloud. These are some notes we took away from the session!

**NOTE: Links to slides will be attached here once we receive them!**

![Google Cloud Services](https://s3-ap-southeast-1.amazonaws.com/spaculus/cdns/images/google-cloud-img.jpg)

## General

### Compliant with Singapore Government’s Application Infrastructure Architecture Standard (AIAS)

AIAS defines a set of standards customers have to abide to to onboard on GCC and also defines how you connect internet and intranet compartment through a gateway utilities tier.

## Google Cloud's Services Are Best for AI/ML Products

For example, [DialogFlow](https://cloud.google.com/dialogflow) is a lifelike conversational AI with state-of-the-art virtual agents. It is great for chatbots! In fact, **Ask Jamie** is powered by it!

**Oliver says: Good for Telegram bots!**

### Q&A

Is GKE Autopilot expensive?

- Once it sees that usage is below a certain threshold, it would scale back. If done right, it can be cost-effective. The usage of the control plane has a cost to it, but most of the cost comes from the nodes.

Are there any set limitations on the monitoring? How do you prevent automated scaling from happening when it is not intended?

- You can set minimum nodes and maximum nodes to scale down an dup to. There are different ways to scale: (1) in the node level, and (2) in the pod level. If traffic starts coming in heavy, GKE will start scaling at the pod level, and then the node level. You can set a threshold for the minimum or maximum number of nodes to scale up to. If there is no traffic at all, it will scale down to zero. However there will be temporary break to services when it scales down, as some of the system pods need to be migrated. Some services will stop for short period of time.

## Container Security

### What are Containers?

Containers package applications to run in a specific format.

![Containers vs VMs](https://download.huawei.com/mdl/image/download?uuid=7e915df1792845a3baaa388c94fc3934)

Examples:

- Linux containers
- Docker containers
- and more

### Orchestrator

Once the number of containers go beyond a certain number, it becomes hard to manage. An orchestration platform help manage the lifecycle and orchestration of the containers.

## Stateless vs Stateful Containers

When the idea of containers were first conceived, containers were \*_stateless_.

While the practice is still to have our database outside of the platform, times have evolved that containers can now run **stateful** applications.

Operator
: A standard way to deploy applications, includes components of application lifecycle.

### What is Container Security?

- Infrastructure Security: Is my infrastructure secure for developing containers?
- Software Supply Chain: Is my ccontainer image secure to build and deploy?
- Runtime Security: Is my contianer secure to run?

GKE offers services to achieve security across these three tenets of container security.

## Istio (Service Mesh)

When the number of microservices grows to a crazy amount, it gets difficult to manage the connections between services. Version 1 of service A might be calling version 1 of Service B. How do you, due to change of requirements, ensure you want to call Version 2 of Service B instead?

Istio allows you to manage different calls between services without changing code. You can simply make a configuration change and the proxy will be informed of the config changes. When service A calls service B, based on config, it will stop calling version 1 of Service B. It will try to call Version 2 of service B instead. This is one fo the more typical use cases to manage connectivity across services without changing codes.

![Istio Architecture](https://istio.io/latest/docs/ops/deployment/architecture/arch.svg)

### Testing Use Case

It can also do other things, like during testing, you can simulate services going down. It comes built in with circuit breaks - these are design patterns built in for you. When a service goes down, like service B, instead of service A calling service A and trying **in a dumb manner** and holding up requests on the front - with the circuit breaker pattern, you can configure the service such that after 3 tries, it trims off and acknowledges that the service A is down and returns an error message on the frontend.

**Key takeaway for service mesh**: If you have more than 10 or 20 microservices interacting with each other, it won't be efficient to change them on the code level. Istio comes in as a traffic controller to make changes without touching code. A service mesh is there to abstract complexity of infrastructure away from the developer.

### Q&A

Do you scan for codes in Google's Container Registry (GCR)?

- GCR only scans for the dependencies and the images.

## Serverless Computing on Google Cloud

![Serverless Computing on GCP](https://bravenewgeek.com/wp-content/uploads/2019/08/gcp_compute.png)

You do not need to take care of infrastructure - infrastructure and storage is abstracted from the developer you use serverless services like CloudRun and CloudFunction.

**Note: CloudFunction has limited supported languages, which is not as wide as CloudRun which can support a wide range of languages, but both are based off of containers.**

### Q&A

When do you use serverless functions?

- Serverless functions are great when the logic of your application requires one action to trigger another action to happen. It is also better for greenfield applications. If you want more control, containerized applications are a better way to go.

Does CloudFunction have HTTP implementation?

- Yes it does!

Does CloudRun have CDN functionality?

- No, you would have to put a separate CDN service in front of Google Cloud Run service.
- **See this [StackOverflow Answer](https://stackoverflow.com/questions/60242762/how-to-put-a-google-cloud-run-service-behind-cloud-cdn) for details on how to do so.**
- \_\_See this [article](https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/) to find our what a CDN is!

## Google Cloud Skills Boost

### Managing Deployments on Google Kubernetes Engine

[Access the lab here](https://www.cloudskillsboost.google/focuses/639?catalog_rank=%7B%22rank%22%3A6%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=20149892)

![Kubernetes Deployment](https://kubesandclouds.com/wp-content/uploads/2020/03/dep.png)

ClusterIP

- Internal communication between pods
  LoadBalancer
- External-facing to enter frontend

```
NAME         TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)         AGE
auth         ClusterIP      10.92.8.170    <none>           80/TCP          4m49s
frontend     LoadBalancer   10.92.13.229   35.235.123.106   443:31736/TCP   48s
hello        ClusterIP      10.92.12.195   <none>           80/TCP          4m11s
kubernetes   ClusterIP      10.92.0.1      <none>           443/TCP         16m
```

What a list of kubernetes services looks like running in a cluster!

### Continuous Delivery Pipelines with Spinnaker and Kubernetes Engine

This lab was recommended, but we were not able to do this lab due to some technical limitations.

### Google Kubernetes Engine Security: Binary Authorization

[Access the lab here](https://www.cloudskillsboost.google/focuses/5154?catalog_rank=%7B%22rank%22%3A4%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=20154651)

This lab covers authorization policies that you can set for your clusters. For example, you can set the policy for a cluster to allow specific images to be deployed within it. You can also set attestation policies which state that there needs to be ac PGP signed attestation, similar to a signed approval by an authorization authority, for an image to be deployed within it.

### Developing a REST API with Go and Cloud Run

[Access the lab here](https://www.cloudskillsboost.google/focuses/14662?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=20157019)

This lab walks us through creating a REST API, containerizing it, and deploying it in a serverless CloudRun Function. It also walks us through creating a database with Firebase.

The main file off the REST API looks like this:

```go
package main
import (
  "fmt"
  "log"
  "net/http"
  "os"
)
func main() {
  port := os.Getenv("PORT")
  if port == "" {
      port = "8080"
  }
  http.HandleFunc("/v1/", func(w http.ResponseWriter, r *http.Request) {
      fmt.Fprintf(w, "{status: 'running'}")
  })
  log.Println("Pets REST API listening on port", port)
  if err := http.ListenAndServe(":"+port, nil); err != nil {
      log.Fatalf("Error launching Pets REST API server: %v", err)
  }
}
```

The Dockerfile looks like this:

```dockerfile
FROM gcr.io/distroless/base-debian10
WORKDIR /usr/src/app
COPY server .
CMD [ "/usr/src/app/server" ]
```

With these, and after building the source code and image, we can simply run the following command on the commandline:

```
gcloud run deploy rest-api   --image gcr.io/$GOOGLE_CLOUD_PROJECT/rest-api:0.1   --platform managed   --region us-central1   --allow-unauthenticated   --max-instances=2
```
