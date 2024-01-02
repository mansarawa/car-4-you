import express from 'express'
import { login } from '../controller/login.js';

const loginrouter=express.Router();

loginrouter.post('/login',login)

export default loginrouter