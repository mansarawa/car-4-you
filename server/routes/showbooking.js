import express from 'express'
import { showbooking } from '../controller/showbooking.js';

const show=express.Router();

show.post('/mybooking',showbooking)

export default show