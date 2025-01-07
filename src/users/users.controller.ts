import { Request, Response } from "express";

export function getAllUsers(req: Request, res: Response) {
    res.send('Get All Users');
}

export function getUserById(req: Request<{ id: string }>, res: Response) {
    res.send(`Get User with ID: ${req.params.id}`);
}