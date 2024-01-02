import express from 'express'
import cors from 'cors'
import router from './routes/signup.js';
import connectToDb from './config/dbConfig.js'
import loginrouter from './routes/login.js';
import bookrouter from './routes/carbook.js';
import show from './routes/showbooking.js';
import adminshow from './routes/showbookingforadmin.js';
import adminregister from './routes/adminregister.js';
import adminlogin from './routes/adminlogin.js';
const app=express();

app.use(cors());
app.use(express.json())
await connectToDb()
app.use('/',router)
app.use('/',loginrouter)
app.use('/',bookrouter)
app.use('/',show)
app.use('/',adminshow)
app.use('/',adminregister)
app.use('/',adminlogin)
app.listen(3002,()=>{
    console.log('start')
})