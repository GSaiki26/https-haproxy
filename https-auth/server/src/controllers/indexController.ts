// Libs
import { Request, Response } from "express";

// Class
class IndexController {
  public static get(req: Request, res: Response): any {
    console.info(`Request from: ${req.ip}`);
    res.status(200).send("OK");
  }
}

// Code
export default IndexController;
