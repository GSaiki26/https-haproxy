// Libs
import { readFileSync } from "fs";
import { Agent } from "https";

import axios from "axios";

// Data
const GATEWAY_URI = "https://test-haproxy:8000";
const agent = new Agent({
  ca: readFileSync("./certs/ca.pem"),
  cert: readFileSync("./certs/client.pem"),
  key: readFileSync("./certs/client.pem.key"),
});

// Code
axios.defaults.httpsAgent = agent;

console.info("Doing request to gateway...");
const req = axios.get(GATEWAY_URI);
req
  .then((res) => {
    console.info("Request completed.");
    console.info(`Body: ${res.data}`);
  })
  .catch((err) => {
    console.error(`Request not completed. Error: ${err}`);
  });
