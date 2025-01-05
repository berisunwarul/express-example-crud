import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get All Tasks');
});

router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
    // return res.send(`Get Task with ID: ${req.params.id}`);
    res.send(`Get Task with ID: ${req.params.id}`);
});

export { router as taskRouters };