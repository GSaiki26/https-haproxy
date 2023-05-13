// Libs
import { readFileSync } from "fs";

import * as grpc from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

import ToolsService from "./services/toolsService";

// Data
const HOST = "0.0.0.0:8000";
const server = new grpc.Server();
const toolsProto = loadSync("./src/proto/tools.proto");
const toolsPackage: any = grpc.loadPackageDefinition(toolsProto).tools;

// Routes
server.addService(toolsPackage.ToolsService.service, {
  Ping: ToolsService.ping.bind(ToolsService)
});

// Define the credentials.
const creds = grpc.ServerCredentials.createSsl(
    readFileSync("./certs/ca.pem"),
    [
      {
        private_key: readFileSync("./certs/server.pem.key"),
        cert_chain: readFileSync("./certs/server.pem"),
      }
    ], false
);

// Start the server.
server.bindAsync(HOST, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(`Error while trying to start the server. Error: ${err}`);
    return;
  }

  server.start();
  console.info(`The server is online on port: ${port}`);
});
