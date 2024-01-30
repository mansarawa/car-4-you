'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/navigation'
import Login from './login.module.css'
import Link from 'next/link'

const page = () => {
  const router = useRouter()
    const [email,setEmail]=useState()
    let a=10;
    const [state,setState]=useState(false)
    const [password,setPassword]=useState()
    const [alert,setAlert]=useState()
    const user=JSON.parse(localStorage.getItem("user"))
    const handleSubmit=async(e)=>{
      e.preventDefault();
        const res=await fetch('http://localhost:3002/login',{
          method:'post',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email:email,
            password:password
          })
        })
        const result=await res.json();
        if(result.success)
        {
          localStorage.setItem("user",JSON.stringify(result.user))
          console.log(JSON.parse(localStorage.getItem("user")))
          //setAlert(user.username)
          router.push('/')
        }
        
        // else{
        //   setState(true)
        //   if(state)
        //        {
        //         //  setAlert('Please fill right info')
        //          setTimeout(()=>{
        //           setState(false)
        //          },[2000])
        //        }     
          
        // }
    }
  return (
   <>
      {/* <div class="alert alert-danger" id={Login.alert1} role="alert">
        {alert}
      </div> */}
   <div className={Login.container}>
    <form onSubmit={handleSubmit} className={Login.form}>
  <div className={Login.mb3}>
    <label htmlFor="exampleInputEmail1" className={Login.label}>
      Email address
    </label>
    <input
      type="email"
      
      name='email'
      onChange={(e)=>setEmail(e.target.value)}
      className={Login.input}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      required
    />

  </div>
  <div className={Login.mb3}>
    <label htmlFor="exampleInputPassword1" className={Login.label}>
      Password
    </label>
    <input
      type="password" name='password' required onChange={(e)=>setPassword(e.target.value)} className={Login.input}
      id="exampleInputPassword1"
    />
  </div>
  <button type="submit"  className={Login.submit}>
    Submit
  </button>
  <Link href={'/registeruser'} className={Login.notaccount} >Not Have An Account ?</Link>
</form>

</div>
</>
  )
}

export default page