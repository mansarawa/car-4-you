import express from 'express'
import { rejectcontroller } from '../controller/rejectcontroller.js';

const reject=express.Router();
reject.put('/reject',rejectcontroller)

export default reject;