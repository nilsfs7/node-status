FROM node:lts

ENV WEB3_PROVIDER=http://localhost:8545

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci --only=production

# Bundle app source
COPY ./src ./src

# Build app
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/main"]