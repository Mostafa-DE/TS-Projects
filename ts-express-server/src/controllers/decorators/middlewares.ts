import "reflect-metadata";
import {RequestHandler} from "express";
import {MetadataKeys, TargetDecorator} from "../../types";

export function use(middleware: RequestHandler) {
    return (target: Object, key: string, desc: PropertyDescriptor) => {
        const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(MetadataKeys.MIDDLEWARE, [...middlewares, middleware], target, key);
    }
}
