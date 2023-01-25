import { MetadataKeys } from './metadata.keys';

export enum Methods {
  GET = 'get',
}

export interface IRouter {
  method: Methods;
  path: string;
  handlerName: string | symbol;
}

const methodDecoratorFactory = (method: Methods) => {
  return (path: string): MethodDecorator => {
    return (target, propertyKey) => {
      const controllerClass = target.constructor;

      const router: IRouter[] = Reflect.hasMetadata(
        MetadataKeys.ROUTERS,
        controllerClass,
      )
        ? Reflect.getMetadata(MetadataKeys.ROUTERS, controllerClass)
        : [];
      router.push({
        method,
        path,
        handlerName: propertyKey,
      });

      Reflect.defineMetadata(MetadataKeys.ROUTERS, router, controllerClass);
    };
  };
};

export const Get = methodDecoratorFactory(Methods.GET);
