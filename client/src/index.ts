// Libs
import { readFileSync } from "fs";

import * as grpc from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

// Data
const GATEWAY_URI = "test-haproxy:8000";
const toolsProto = loadSync("./src/proto/tools.proto");
const toolsPackage: any = grpc.loadPackageDefinition(toolsProto).tools;
const creds = grpc.ChannelCredentials.createSsl(
  readFileSync("./certs/ca.pem"),
  readFileSync("./certs/client.pem.key"),
  readFileSync("./certs/client.pem"),
);

// Code
console.info("Doing request to gateway...");
const client = new toolsPackage.ToolsService(GATEWAY_URI, grpc.ChannelCredentials.createInsecure());

client.Ping({
  state: 1
}, (err: Error, res: any) => {
  if (err) {
    console.error(`Request not completed. Error: ${err}`);
    return;
  }

  console.info("Request completed.");
  console.info(`Body: \n\n${JSON.stringify(res, null, 4)}`);
});
