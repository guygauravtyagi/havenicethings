import { Request, Response } from 'express';
import Controller from '../models/functional-meta-data/controller';

export class LoginController implements Controller {

    controll(req: Request, res: Response): void {
        res.json({
            hello: 'hello'
        })
    }
    
}