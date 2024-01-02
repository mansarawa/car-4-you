import express from 'express'
import { bookcar, getCar } from '../controller/bookcar.js';

const bookrouter=express.Router();

bookrouter.post('/book',bookcar)
bookrouter.post('/getcar',getCar)
export default bookrouter;