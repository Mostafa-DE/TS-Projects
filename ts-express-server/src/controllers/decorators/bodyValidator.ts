import "reflect-metadata";
import {MetadataKeys} from "../../types";


export function bodyValidator(...keys: string[]) {
    return (target: {}, key: string, desc: PropertyDescriptor) => {
        Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
    }
}
