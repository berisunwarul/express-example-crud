import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    // res.cookie('username', 'John Doe');
    // res.clearCookie();
    res.send('set');
});

router.get('/get', (req, res) => {
    res.json(req.cookies);
});

export {router as homeRouters};