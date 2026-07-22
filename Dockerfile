# Build stage
FROM node:24.18.0 AS build

## Create app directory
WORKDIR /app

## Install app dependencies (full install needed to compile TypeScript)
COPY tsconfig*.json package*.json nest-cli.json ./
ENV HUSKY=0
RUN npm ci

## Bundle app source
COPY ./src ./src

## Build app and drop devDependencies for the runtime image
RUN npm run build && npm prune --omit=dev



# Run stage
FROM node:24.18.0

## Switch to less privileged user
USER node

## Declare env vars
ENV ETH1_PROVIDER=http://localhost:8545
ENV ETH2_PROVIDER=http://localhost:5052

## Create app directory
WORKDIR /app

## Copy app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

## Execute app
CMD [ "node", "dist/main"]

## Expose port
EXPOSE 3000
