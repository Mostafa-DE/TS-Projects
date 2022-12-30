import {Router, Response, Request, NextFunction} from 'express';

interface RequestWithBody extends Request {
    body: Record<string, string | undefined>
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('You are not permitted to access this route!!');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send(
        `
            <div>
                <h1>Hi There, Welcome !!</h1>
                <a href="/login">Login</a>
                <a href="/protected">Protected Page!!</a>
            </div>
        `
    );
});


router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const {email, password} = req.body;

    if (email && password && email === 'mostafa' && password === '078900') {
        req.session = {loggedIn: true};
        res.redirect('/');
    } else {
        res.send('Invalid email or password, please try again!!');
    }
});

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send(
        `
                <h1>Welcome to protected route, you are logged-in user!!</h1>
                <a href="/logout">Logout</a>
            `
    );
});

export {router};
