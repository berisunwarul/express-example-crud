import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Get All Roles');
});

router.get('/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    res.send(`Get Role with id: ${id}`);
});

export { router as rolesRouters };
