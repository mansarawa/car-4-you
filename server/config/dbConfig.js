import mongoose from "mongoose";

async function connectToDb(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/carrental')
        console.log("connect successfully")
    } catch (error) {
        console.log(error)
    }
}
export default connectToDb