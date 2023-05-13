# Basics
FROM node:19.2-alpine
WORKDIR /app

# Envs
ENV SUBJ "/C=US/ST=California/L=San Francisco/O=Example Company/OU=IT Department/CN=test-haproxy"

# Update the container
RUN apk upgrade --update --no-cache
RUN apk add --no-cache openssl
RUN npm i -g typescript

# Configure the user
RUN chown -R node /app
USER node

# Create the server's CSR
RUN mkdir certs
RUN openssl req -new -nodes -out ./certs/server.csr -newkey rsa:2048 -keyout ./certs/server.pem.key -subj "$SUBJ"

# Sign the CSR with the CA's cert and key.
COPY --chown=node ./certs/ca* ./certs/
RUN openssl x509 -days 365 -req -in ./certs/server.csr -CA ./certs/ca.pem -CAkey ./certs/ca.pem.key -out ./certs/server.pem
# RUN rm ./certs/ca.pem.key

# Install the packages
COPY --chown=node ./server/package.json .
RUN yarn

COPY --chown=node ./server/tsconfig.json .
COPY --chown=node ./server/src ./src
COPY --chown=node ./proto ./src/proto

# Run the project
RUN yarn run build
CMD yarn run start
