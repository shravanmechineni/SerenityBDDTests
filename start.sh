#!/usr/bin/env bash
echo "Building image"
docker-compose build
echo "Running tests with containers up"
docker-compose up tests
#docker-compose run tests
