## To run one specific runnerIT class on one browser
````
mvn verify -Dit.test=TestRunnerIT -Dwebdriver.driver=chrome
````

to provide url from cmd
```` 
-Dwebdriver.base.url=https://www.google.co.in
````

## Code run
To run the bdd tests using selenium docker container anytime just do
````bash
$ ./restart.sh
````


## DOCKER CheatSheet

````
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls (or) docker ps
docker container ls --all (or) docker ps -a
docker container ls -aq
````

## Push this tests image to Docker repo
````
docker login
docker tag serenitybddtests_tests shravanm/serenitybddtests_tests (shravanm is the docker hub id)
docker push shravanm/serenitybddtests_tests
````

## To list the detailed content of an image you have to run
```` 
docker run --rm image/name ls -alR 
where --rm means remove as soon as exits form a container
````

## To delete all the images locally
````
docker rm -f $(docker ps -a -q)
docker rmi -f $(docker images -q)
````

## To access the file system of a particular Container, first, let us get the Container ID using the inspect command on the Docker Host.
````   
docker inspect <Container Name>
````

## To get all the container names
````
docker ps -a
````
