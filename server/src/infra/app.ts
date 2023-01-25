import dotenv from 'dotenv';
import express, { Application as ExApp, Handler } from 'express';

import { controllers } from '../app/controllers';
import { IRouter } from '../utils/handlers.decorator';
import { MetadataKeys } from '../utils/metadata.keys';
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
    const info: Array<{ api: string; handler: string }> = [];
    controllers.forEach((controllerClass) => {
      const controllerInstance: { [handleName: string]: Handler } =
        new controllerClass() as any;

      const basePath: string = Reflect.getMetadata(
        MetadataKeys.BASE_PATH,
        controllerClass,
      );
      const routers: IRouter[] = Reflect.getMetadata(
        MetadataKeys.ROUTERS,
        controllerClass,
      );
      const exRouter = express.Router();

      routers.forEach(({ method, path, handlerName }) => {
        exRouter[method](
          path,
          controllerInstance[String(handlerName)].bind(controllerInstance),
        );

        info.push({
          api: `${method.toLocaleUpperCase()} ${basePath + path}`,
          handler: `${controllerClass.name}.${String(handlerName)}`,
        });
      });

      this.instance.use(basePath, exRouter);
    });
  }
}

export default new Application();
