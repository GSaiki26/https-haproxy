# Basics
FROM node:19.2-alpine
WORKDIR /app

# Update the container
RUN apk upgrade --update --no-cache
RUN npm i -g typescript

# Configure the user
RUN chown -R node /app
USER node

# Install the packages
COPY --chown=node ./server/package.json .
RUN yarn

# Get the project
COPY --chown=node ./server/tsconfig.json .
COPY --chown=node ./server/src ./src
COPY --chown=node ./proto ./src/proto

# Get the certs
RUN mkdir certs
COPY --chown=node ./certs/ca.pem ./certs
COPY --chown=node ./certs/server.* ./certs/

# Run the project
RUN yarn run build
CMD yarn run start
