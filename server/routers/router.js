import express from 'express';
import { addUser } from '../controller/users.js';

const router = express.Router();

router.post('/signup', addUser);

router.get('/', (req,res) => {
    res.json({
        mes: "hello"
    })
})

export default router;
