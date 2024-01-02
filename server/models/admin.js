import mongoose, { Schema } from 'mongoose'

const adminSchema=new Schema({
    username:String,
    password:String,
    email:String
})

const admin=mongoose.model('admin',adminSchema)

export default admin