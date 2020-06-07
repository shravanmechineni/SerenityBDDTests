#!/usr/bin/env bash

// RUN chmod +x ./build.sh for authorisation to run if prompted

// Enforce cleanup - necessary e.g. if previous run was interrupted manually
docker stop selenium || true
docker rm selenium || true

// Run a Selenium container
docker run --name selenium -d -p 44444:4444 selenium/standalone-firefox:3.14.0-europium
#docker run --name selenium -d -p 4444:4444 selenium/standalone-chrome:3.4.0-einsteinium

mvn clean verify

#docker stop selenium
#docker rm selenium
