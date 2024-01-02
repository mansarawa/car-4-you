import User from "../models/User.js";
export const signup=async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !password)
    {
        res.send("please fill right info")
    }
    const newUser=User.create({
        email:email,
        username:username,
        password:password
    })
    await newUser.save;
    return res.send({user:find,message:"user created successfully",success:true})
}