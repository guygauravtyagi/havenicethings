import express from 'express';
import { LoginController } from '../controllers/loginController';

export class BasicRouting {

    private app: express.Application
    private loginController: LoginController = new LoginController()

    constructor(app: express.Application) {
        this.app = app;
        this.setRouting();
    }

    setRouting() {
        this.app.get('/login', this.loginController.controll);
    }

}