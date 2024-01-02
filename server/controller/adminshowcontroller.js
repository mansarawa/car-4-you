import Book from "../models/Book.js"

export  const adminshowcontroller =async(req,res)=>{

    const userData=await Book.find({},'userid pickup drop pickupdate dropdate status');
    
    return res.json({data:userData,message:"All booking",success:true});
}