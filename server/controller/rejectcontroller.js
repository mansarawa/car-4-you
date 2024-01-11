import Book from "../models/Book.js"

export const rejectcontroller=async(req,res)=>{
    const {_id}=req.body
    const user=await Book.findById(_id)
    user.status='rejected'
    user.save();
   return res.json({message:"updated",result:user.status})
}