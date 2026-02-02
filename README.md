# FastAPI Kubernetes Platform

This project implements a fully automated **CI/CD platform** for a FastAPI application backed by Redis, running on **Kubernetes**. It includes:  

- **Continuous Integration (CI):** GitLab CI handles code validation, building, dockerizing, and pushing the application image.  
- **Continuous Deployment (CD):** FluxCD manages GitOps-based deployments of the FastAPI app, Redis, ELK stack, and k6 performance tests.  
- **Observability:** ELK stack collects and visualizes logs from both the application and the Kubernetes infrastructure.  
- **Performance Testing:** k6 load and stress tests are executed in the cluster after deployment to validate system performance and scalability.  

This architecture ensures **scalable, efficient, and performance-optimized deployments** while keeping the workflow fully automated and observable.  

For **full implementation details, repository structure, manifests, scripts, and instructions**, please refer to the [project guide](project_1_documentation.md).


Arian Ramezani -- Feb 2026
