import express from 'express';
import { addUser } from '../controller/users.js';
import {errHandling} from '../middleware/error.js'

const router = express.Router();

router.post('/signup', addUser, errHandling);

router.get('/', (req,res) => {
    res.json({
        mes: "hello"
    })
})

export default router;
