import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import {AppRouter} from "./AppRouter";
import './controllers/LoginController';
import './controllers/MainController';


const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys: ['mostafa']}));
app.use(AppRouter.getInstance);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
