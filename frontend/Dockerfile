FROM node:18-alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn --frozen-lockfile --prod

COPY . .

RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy frontend build files
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80:443

CMD ["nginx", "-g", "daemon off;"]
