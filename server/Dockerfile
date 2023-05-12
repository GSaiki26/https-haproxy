# Basics
FROM node:19.2-alpine
WORKDIR /app

# Update the container
RUN apk upgrade --update --no-cache

# Install the packages
COPY ./package.json .
RUN yarn --production

COPY ./certs ./certs
COPY ./src ./src
CMD yarn run start