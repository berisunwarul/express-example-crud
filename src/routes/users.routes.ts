import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get All Users');
});

router.get('/:id', (req: Request, res: Response) => {
    res.send(`Get User with ID: ${req.params.id}`);
});

export default router;