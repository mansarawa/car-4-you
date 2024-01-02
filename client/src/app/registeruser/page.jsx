'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
const page = () => {
    const router=useRouter();
    const [email,setEmail]=useState()
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const user=JSON.parse(localStorage.getItem("user"))
    const handleSubmit=async()=>{
        
        const res=await fetch('http://localhost:3002/createuser',{
          method:'post',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email:email,
            username:username,
            password:password
          })
        })
        const result =await res.json();
        if(result.success)
        {         
            router.push('/')
        }
           }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      UserName
    </label>
    <input
      type="text"
      name='username'
      onChange={(e)=>setUsername(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Email
    </label>
    <input
      type="email"
      name='email'
      onChange={(e)=>setEmail(e.target.value)}
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      name='password'
      onChange={(e)=>setPassword(e.target.value)}
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>
  )
}

export default page