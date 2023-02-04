import express, { Router } from 'express';
import { LoginController } from './../controllers/loginControler';

export class BasicRouting {

    private router: Router;
    private loginController: LoginController = new LoginController()

    constructor() {
        this.router = express.Router();
    }

    getRouting () {
        return this.router;
    }

    setRouting() {
        this.router.get('/login', this.loginController.controll);
    }

}