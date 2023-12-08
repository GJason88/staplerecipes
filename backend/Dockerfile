FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

# remove --prod for dev
RUN yarn --frozen-lockfile --prod

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
