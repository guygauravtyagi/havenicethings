import { Request, Response } from 'express';
import * as mongodb from 'mongodb';
import Controller from '../models/functional-meta-data/controller';

export class LoginController implements Controller {

    controll(req: Request, res: Response): void {
        console.log(req, res)
    }
    
}