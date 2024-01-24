import User from "../models/User.js";
export const signup=async(req,res)=>{
    try {
        
   
    const {username,email,password}=req.body;
    const find=await User.findOne({email:email})
    if(!username || !password)
    {
       return res.send({success:false,message:"please fill right info"})
    }
    if(find)
    {
       return res.send({success:false,message:"you already have an account"})
    }
    
    const newUser= User.create({
        email:email,
        username:username,
        password:password
    })
    await newUser.save;

    return res.send({message:"user created successfully",success:true})
} catch (error) {
    return res.status(400)
}
}