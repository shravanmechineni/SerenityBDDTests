FROM maven:3.3.9-jdk-8-alpine

WORKDIR /app

ADD . /app

RUN mvn compile