import express from 'express'
import { signup } from '../controller/signup.js';
const router=express.Router();

router.post('/createuser',signup)

export default router