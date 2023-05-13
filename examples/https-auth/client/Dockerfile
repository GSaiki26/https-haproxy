# Basics
FROM node:19.2-alpine
WORKDIR /app

# Envs
ENV SUBJ="/C=US/ST=California/L=San Francisco/O=Example Company/OU=IT Department/CN=test-client"

# Update the container
RUN apk upgrade --update --no-cache
RUN apk add --no-cache openssl
RUN npm i -g typescript

# Configure the user
RUN chown -R node /app
USER node

# Create the client's CSR and key
RUN mkdir certs
RUN openssl req -new -nodes -out ./certs/client.csr -newkey rsa:2048 -keyout ./certs/client.pem.key -subj "$SUBJ"

# Get and sign the client's CSR with the CA cert
COPY --chown=node ./certs/ca* ./certs/
RUN openssl x509 -days 365 -req -in ./certs/client.csr -CA ./certs/ca.pem -CAkey ./certs/ca.pem.key -out ./certs/client.pem
RUN rm ./certs/ca.pem.key

# Install the packages
COPY --chown=node ./client/package.json .
RUN yarn

COPY --chown=node ./client/tsconfig.json .
COPY --chown=node ./client/src ./src

# Run the project

RUN yarn run build
CMD yarn run start