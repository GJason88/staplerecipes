FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

# use --prod for prod
RUN yarn --frozen-lockfile

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
