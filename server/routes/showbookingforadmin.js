import  express  from "express";
import { adminshowcontroller } from "../controller/adminshowcontroller.js";

const adminshow=express.Router();

adminshow.get('/admin',adminshowcontroller)

export default adminshow;