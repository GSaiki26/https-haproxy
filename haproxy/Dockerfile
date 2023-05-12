# Basics
FROM haproxy:2.7.8-alpine
WORKDIR /usr/local/etc/haproxy

# Update the container
USER root
RUN apk upgrade --update --no-cache
USER haproxy

# Get the config file
COPY haproxy.cfg .
COPY --chown=haproxy ca.crt .
COPY --chown=haproxy ca.crt.key .
