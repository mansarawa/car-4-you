const express=require('express')
const app=express()
const mongoose=require('mongoose')
const userModel=require('./user')
const cors=require('cors')
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/carrentalagain')

app.post('/register',(req,res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})
app.post('/login',(req,res)=>{
    const {email,password}=req.body
    userModel.findOne({email:email})
    .then(users=>{
        if(users)
        {
            if(users.password=== password)
            {
                res.json('success')
            }
            else{
                res.json('wrong password')
            }
        }
        else
        {
            res.json('not record exist')
        }
    })
    .catch(err=>res.json(err))
})
app.listen(3009,(req,res)=>{
    console.log("server run")
})
