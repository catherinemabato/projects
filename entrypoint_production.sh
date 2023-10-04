#!/bin/bash

# Step 1: Build the Docker image
docker build -t async_prod -f Dockerfile . && docker run -d -p 3000:3000 async_prod