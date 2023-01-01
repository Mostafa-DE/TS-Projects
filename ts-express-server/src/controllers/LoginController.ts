import {Request, Response} from "express";
import {get, post, controller, bodyValidator} from "./decorators";
import {RequestWithBody} from "../types";

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
        res.send(
            `
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `
        );
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: RequestWithBody, res: Response) {
        req.session = {loggedIn: true};
        res.redirect('/');
    }

    @get('/logout')
    logout(req: RequestWithBody, res: Response) {
        req.session = undefined;
        res.redirect('/');
    }
}
