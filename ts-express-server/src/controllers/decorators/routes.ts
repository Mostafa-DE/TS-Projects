import "reflect-metadata";
import {Methods, MetadataKeys, TargetDecorator, RouteHandlerDescriptor, Class} from "../../types";

function routeBinder(method: Methods) {
    return (path: string) => {
        return (target: Object, key: string, desc: RouteHandlerDescriptor) => {
            Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);
export const put = routeBinder(Methods.PUT);
export const del = routeBinder(Methods.DELETE);
