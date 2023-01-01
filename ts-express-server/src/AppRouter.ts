import express from "express";

// this is a (singleton) to create a single instance of the AppRouter class for the entire application
export class AppRouter {
    private static instance: express.Router;

    static get getInstance(): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    }
}
