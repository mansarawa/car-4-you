import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    email:String,
    username:String,
    password:String
})

const User=mongoose.model('user',userSchema)

export default User