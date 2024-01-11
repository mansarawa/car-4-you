import express from 'express'
import { completcontroller } from '../controller/completecontroller.js';

const completed=express.Router();

completed.put('/completed',completcontroller)

export default completed