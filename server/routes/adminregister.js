import express from 'express'
import { adminregistercontroller } from '../controller/adminregistercontroller.js';

const adminregister=express.Router();

adminregister.post('/adminregister',adminregistercontroller)

export default adminregister;