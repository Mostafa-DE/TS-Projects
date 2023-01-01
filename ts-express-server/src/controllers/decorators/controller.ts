import "reflect-metadata";
import {AppRouter} from "../../AppRouter";
import {Methods, MetadataKeys, Class} from "../../types";
import {bodyValidators} from "../../utils/validators";

export function controller<T>(routePrefix: string) {
    return (target: Class<T>) => {
        const router = AppRouter.getInstance;
        const keys = Object.getOwnPropertyNames(target.prototype);

        for (let key of keys) {
            if (key === 'constructor') continue;
            const routeHandler: () => void = target.prototype[key];
            const path: string = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];
            const validator = bodyValidators(requiredBodyProps);
            if (path) router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
        }
    }
}
