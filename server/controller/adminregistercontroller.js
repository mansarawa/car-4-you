import admin from "../models/admin.js";

export const adminregistercontroller=async(req,res)=>{
    const {username,email,password}=req.body;
    const newAdmin=admin.create({
        username:username,
        password:password,
        email:email
})
    await newAdmin.save
    return res.json({message:'admin created'})

}