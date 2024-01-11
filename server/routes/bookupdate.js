import express from 'express'
import { acceptcontroller } from '../controller/acceptcontroller.js';

const accept=express.Router();

accept.put('/accept',acceptcontroller)

export default accept