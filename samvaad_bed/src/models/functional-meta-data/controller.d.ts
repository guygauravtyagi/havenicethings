import { Request, Response } from "express";

export default interface Controller {
    controll(req: Request, res: Response): void
}