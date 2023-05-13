// Libs
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";

// Class
class IndexService {
  public static ping(call: ServerUnaryCall<any, any>, send: sendUnaryData<any>): any {
    console.info(`Request from: ${call.getPeer()}`);
    send(null, {
      status: "Success",
      data: {
        state: call.request.state
      }
    });
  }
}

// Code
export default IndexService;
