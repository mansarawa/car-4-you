'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function page()  {
  const router=useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handelfunction=async(e)=>{
    try {
        e.preventDefault();
      const res=await fetch('http://localhost:3002/adminlogin',{
          method:'post',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              email:email,
              password:password
          })
      })
      const result=await res.json();
      console.log(result)
      if(result.success)
      {
          router.push('/admin');
          console.log(result)
      }
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className='container'>
            <form onSubmit={handelfunction}>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type='submit' className="btn btn-primary">Submit</button>
            </form>
        </div>
  )
}