import express, { Request, Response } from 'express';
import { getAllUsers, getUserById } from './users.controller';
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;