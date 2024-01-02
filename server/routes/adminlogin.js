import express from 'express'
import { adminlogincontroller } from '../controller/adminlogincontroller.js';

const adminlogin=express.Router();

adminlogin.post('/adminlogin',adminlogincontroller)

export default adminlogin