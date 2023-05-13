# Usage
## Pre-requisites
In order to use this example, you need to create a pair of key and cert to the CA (Certification Authority).

To do that, you need to run this command: `(openssl required)`
```sh
mkdir certs;

SUBJ="/C=US/ST=California/L=San Francisco/O=Example Company/OU=IT Department/CN=test-haproxy"
openssl req -x509 -nodes -days 365 -out ./certs/ca.pem -newkey rsa:2048 -keyout ./certs/ca.pem.key -subj "$SUBJ"
```

## Starting
If for some reason you can't use `docker-compose`, you can manually build and run the containers.
The project has the haproxy, the server, and optionally the client.

So, you'll need to cd each container and run the commands:
```sh
docker build -t image_name .;
docker run --name container_name image_name;
```

Or simply using:
```sh
docker-compose up --build
```
