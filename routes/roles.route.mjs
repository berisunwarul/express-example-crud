import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get All Roles');
});

router.get('/:id', (req, res) => {
    console.log(typeof req.params.id);
    return res.send(typeof +req.params.id);
});

export {router as rolesRouters};
