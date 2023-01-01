import {NextFunction, Request, Response} from "express";
import {get, controller, use} from "./decorators";


function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('You are not permitted to access this route!!');
}

@controller('')
export class MainController {
    @get('/')
    getRoot(req: Request, res: Response) {
        res.send(
            `
            <div>
                <h1>Hi There, Welcome !!</h1>
                <a href="/auth/login">Login</a>
                <a href="/protected">Protected Page!!</a>
            </div>
        `
        );
    }

    @get('/protected')
    @use(requireAuth)
    getProtectedPage(req: Request, res: Response) {
        res.send(
            `
                <h1>Welcome to protected route, you are logged-in user!!</h1>
                <a href="/auth/logout">Logout</a>
            `
        );
    }
}
