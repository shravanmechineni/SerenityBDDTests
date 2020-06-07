#!/usr/bin/env bash
echo "Cleaning up by deleting containers if already running"
docker-compose stop
docker-compose rm -f
