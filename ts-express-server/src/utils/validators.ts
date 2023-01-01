import {NextFunction, Request, RequestHandler, Response} from "express";

export function bodyValidators(keys: string): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }

        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send(`Missing property ${key}`);
                return;
            }
            if (key === 'email' && req.body[key] !== 'mostafa') {
                res.status(422).send(`Invalid email`);
                return;
            }

            if (key === 'password' && req.body[key] !== '078900') {
                res.status(422).send(`Invalid password`);
                return;
            }
        }
        next();
    }
}
