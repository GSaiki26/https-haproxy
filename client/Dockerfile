# Basics
FROM node:19.2-alpine
WORKDIR /app

# Update the container
RUN apk upgrade --update --no-cache
RUN npm i -g typescript

# Install the packages
COPY ./package.json .
RUN yarn --production

COPY ./tsconfig.json .
COPY ./certs ./certs
COPY ./src ./src
CMD yarn run start