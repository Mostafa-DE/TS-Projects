import {Request, RequestHandler} from "express";

export interface Class<T> extends Function { new (...args: unknown[]): T; }
// you can also do this:
// export type Class<T extends {}> = {new (...args: unknown[]) : T};

export type TargetDecorator = {(arg: unknown): void};

export interface RequestWithBody extends Request {
    body: Record<string, string | undefined>
}

export interface RouteHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler;
}

export enum Methods {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    PATCH = 'patch'
}

export enum MetadataKeys {
    METHOD = 'method',
    PATH = 'path',
    MIDDLEWARE = 'middleware',
    VALIDATOR = 'validator'
}
