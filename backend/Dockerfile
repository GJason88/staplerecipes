FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn --frozen-lockfile

COPY . .

EXPOSE 3000

CMD [ "node", "-r", "dotenv/config", "server.js" ]
