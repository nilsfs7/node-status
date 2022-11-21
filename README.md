# Node Status

Shows status of your ethereum node.

## Prerequisites

- ETH1 node
- ETH2 node

## Run

Copy .env.example to .env and adjust values.

install dependencies

```
npm i
```

start app

```
npm start
```

An OpenAPI documentation is available at `http://localhost:3000/api`.

## Run in Docker

pull image

```
docker pull luisnaldo7/node-status:latest
```

or build image

```
docker build -t luisnaldo7/node-status:latest .
```

execute container

```
docker run -d -p 3000:3000 --rm --name node-status luisnaldo7/node-status:latest
```

execute container on boot

```
docker run -d -p 3000:3000 --restart always --name node-status luisnaldo7/node-status:latest
```

## Run in Docker-Compose

execute container

```
docker-compose up
```

stop container

```
docker-compose down
```
