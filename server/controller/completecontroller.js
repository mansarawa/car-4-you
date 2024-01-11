import Book from "../models/Book.js";

export const completcontroller=async(req,res)=>{
    const {_id}=req.body;

    const user=await Book.findById(_id)
    user.status='completed'
    await user.save();;

}