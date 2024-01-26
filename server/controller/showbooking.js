import Book from '../models/Book.js'
export const showbooking=async(req,res)=>{
     const {pickup,drop,pickupdate,userid,dropdate,status}=req.body;
    const find=await Book.find({userid:userid})
    // if(find)
    // {
    //     console.log(pickup)
    // }
   return res.json({book:find,message:"your booking",success :true}) 
   console.log(find)
}