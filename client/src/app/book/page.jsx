'use client'
import Image from 'next/image'
import Fortuner from '../../../assets/fortuner.png'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Book from './book.module.css'
export default function page  ()  {
  const [pickup, setPickup] = useState()
  const [drop,setDrop]=useState();
  const router=useRouter()
  const [pickupdate,setPickpupdate]=useState();
  const [dropdate,setDropdate]=useState();
  const [process, setProcess] = useState('process')
  const user=JSON.parse(localStorage.getItem('user'))
  
   if(user._id==null)
   {
    router.push('/login')
   }
  
   const userid=user._id
  console.log(user)
  const handlesubmit=async()=>{
    const res=await fetch('http://localhost:3002/book',{
      method:"post",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify({
        pickup:pickup,
        drop:drop,
        pickupdate:pickupdate,
        dropdate:dropdate,
        status:process,
        userid:userid
      })

    })
    const result=await res.json();
    if(result =='booking conformed')
    {
      console.log("booking conformed")
    }

   
  }
  return (
    <div className={Book.container}>
     
        <div className={Book.booking}>
          <form onSubmit={handlesubmit}>
          <div className={Book.inputbox}>
            <span>Pick up</span>
            <input type="text" required onChange={(e)=>setPickup(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="location" id="" />
          </div>
          <div className={Book.inputbox}>
            <span>Drop</span>
            <input type="text" required onChange={(e)=>setDrop(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="location" id="" />
          </div>
          <div className={Book.inputbox}>
            <span>Pick-Up Date</span>
            <input type="date" required onChange={(e)=>setPickpupdate(e.target.value)} style={{padding:'7px' ,outline:"none",border:'none'}} name="pick" id="" />
            </div>
          <div className={Book.inputbox}>
            <span>Return Date</span>
            <input type="date" required onChange={(e)=>setDropdate(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="return" id="" />
            </div>
            <div className={Book.inputbox}>
              <button style={{padding:'7px',marginTop:'25%',outline:"none",border:'none',cursor:'pointer',background:'#0d6efd',border:"none",borderRadius:'5px',color:'#fff',fontSize:'18px'}}>Submit</button>
            </div>
            </form>
        </div>
      
    </div>
  )
}
