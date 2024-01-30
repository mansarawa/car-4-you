import mongoose, { Schema } from 'mongoose'

const bookSchema=new Schema({
    pickup:String,
    drop:String,
    carname:String,
    pickupdate: Date,
    dropdate: Date,
    status:String,
    pickuptime:Date,
    droptime:Date,
    userid:String
})

const Book =mongoose.model('book',bookSchema)

export default Book;