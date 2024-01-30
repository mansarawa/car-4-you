import Book from "../models/Book.js";
export  async function  bookcar(req,res){
    const {pickup,drop,pickupdate,pickuptime,droptime,userid,carname,status,dropdate}=req.body;
    const newBook= Book.create({
        pickup:pickup,
        drop:drop,
        pickupdate:pickupdate,
        status:status,
        carname:carname,
        pickuptime:pickuptime,
        droptime:droptime,
        dropdate:dropdate,
        userid:userid
    })
    await newBook.save;
   return res.json({book:newBook,message:"booking conformed",success :true}) 
}
export const getCar=async(req,res)=>{
    try {
        
  
    const {userid}=req.body

    if(!userid){
        return res.status(400).send("please provide user id")
        }
    const ifUser= await Book.findById({userid})
    if(!ifUser)
    {
        return res.json({booking:ifUser,message:'booking is not available',success:true}).status(200)
    }
} catch (error) {
        console.log(error)
}
        
}