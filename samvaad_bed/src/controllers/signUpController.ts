import { Request, Response } from 'express';
import * as mongodb from 'mongodb';
import Controller from '../models/functional-meta-data/controller';

export class SignUpController implements Controller {

    controll(req: Request, res: Response): void {
        res.json({
            hello: 'hello'
        })
    }
    
}