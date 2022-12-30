import express, {Request, Response} from 'express';
import {router} from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';


const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys: ['mostafa']}));
app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
