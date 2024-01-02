import admin from "../models/admin.js";

export const adminlogincontroller=async(req,res)=>{
    const {email,password}=req.body;
    const find=await admin.findOne({email:email})
    if(find)
    {
        if(password==find.password)
        {
            res.json({message:'login successfully',admin:find,success:true})
        }
        else
        {
            res.json({message:'invalid password',admin:find,success:false})
        }
    }
    else
    {
        res.json({message:'admin not found',admin:find,success:false})
    }
}