import dotenv from "dotenv";
import express, { Application as ExApp } from "express";
dotenv.config();

class Application {
  private readonly _instance: ExApp;

  get instance(): ExApp {
    return this._instance;
  }

  constructor() {
    this._instance = express();
    this._instance.use(express.json());
    this.registerRouters();
  }

  public run() {
    const PORT = process.env.PORT;
    this._instance.listen(PORT, () => {
      console.log(`Server is running on : ${PORT}`);
    });
  }

  private registerRouters() {
    this._instance.get("/", (request, response) => {
      response.json({ message: "Hello World!" });
    });
  }
}

export default new Application();
