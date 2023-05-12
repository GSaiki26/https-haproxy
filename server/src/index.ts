// Libs
import { readFileSync } from "fs";
import { createServer } from "https";

import express from "express";
import helmet from "helmet";
import router from "./router/router";

// Data
const app = express();
const PORT = 8000;

// Code
app.use(helmet());
app.use(router);

// Create the server.
const server = createServer(
  {
    cert: readFileSync("./certs/server.pem"),
    key: readFileSync("./certs/server.pem.key"),
    ca: readFileSync("./certs/ca.pem"),
  },
  app
);

// Start the server.
server.listen(PORT, () => {
  console.log(`The server is online on port: ${PORT}`);
});
