import User from "../models/User.js";
export const login=async(req,res)=>{
    const  {email,password}=req.body;
    let find=await User.findOne({email:email})
    
    if(find)
    {
        if(password==find.password)
        {
            
            res.json({user:find,message:"login successful ",success :true})
        }
    
    }
    else{
        res.send('not user found')
    }
}
//res.json({user:find,message:"login successful "})