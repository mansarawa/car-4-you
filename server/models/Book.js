import mongoose, { Schema } from 'mongoose'

const bookSchema=new Schema({
    pickup:String,
    drop:String,
    pickupdate: Date,
    dropdate: Date,
    status:String,
    userid:String
})

const Book =mongoose.model('book',bookSchema)

export default Book;