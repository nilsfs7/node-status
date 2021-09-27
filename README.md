# Node Status

Shows status of your ethereum node.

## Run

Copy .env.example to .env and adjust values.

install dependencies
```bash
npm i
```

start app
```bash
npm start
```

An OpenAPI documentation is available at `http://localhost:3000/api`.

## Run in Docker

pull image
```bash
docker pull luisnaldo7/node-status:latest
```

or build image
```bash   
docker build -t luisnaldo7/node-status:latest .
```

execute container
```bash 
docker run -d -p 3000:3000 --rm --name node-status luisnaldo7/node-status:latest
```

execute container on boot
```bash 
docker run -d -p 3000:3000 --restart always --name node-status luisnaldo7/node-status:latest
```
