import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get All Tasks');
});

router.get('/:id', (req, res) => {
    return res.send(`Get Task with ID: ${req.params.id}`);
});

export {router as taskRouters};