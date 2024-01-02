const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    
    password:String,
    email:String
})

module.exports=mongoose.model('user',userSchema)