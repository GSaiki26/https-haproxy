# Basics
FROM haproxy:2.7.8-alpine
WORKDIR /usr/local/etc/haproxy

# Update the container
USER root
RUN apk upgrade --update --no-cache
USER haproxy

# Get the config file and the CA cert.
COPY --chown=haproxy ./certs/ca* ./
COPY --chown=haproxy ./haproxy/haproxy.cfg .
