import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get All Users');
});

router.get('/:id', (req, res) => {
    return res.send(`Get User with ID: ${req.params.id}`);
});

export default router;