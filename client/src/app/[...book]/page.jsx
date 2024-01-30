'use client'
import Image from 'next/image'
import Fortuner from '../../../assets/fortuner.png'
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Book from './book.module.css'

export default function page  (params)  {
  
  const router=useRouter()

  //console.log(params.params.book[1])

  const [pickup, setPickup] = useState()
  const [drop,setDrop]=useState();
  const carname=params.params.book[1];
  const [pickupdate,setPickpupdate]=useState();
  const [dropdate,setDropdate]=useState();
  const [process, setProcess] = useState('process')
  const user=JSON.parse(localStorage.getItem('user'))
  const [pickuptime, setPickuptime] = useState('')
  const [droptime, setDroptime] = useState('')

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
        carname:carname,
        userid:userid,
        // pickuptime:pickuptime,
        // droptime:droptime
      })
      
    }
  
    )
    const result=await res.json();
    if(result =='booking conformed')
    {
      console.log("booking conformed")
     
    }
    router.push('/');
    
  }
  return (
    <div className={Book.container}>
    
        <div className={Book.booking}>
          <form onSubmit={handlesubmit}>
          <h1 className={Book.heading}>Booking For {carname.charAt(0).toUpperCase() + carname.slice(1)}</h1>
          <div className={Book.inputbox}>
            <span>Pick up </span> 
            <input type="text" required onChange={(e)=>setPickup(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="location" id="" />
          </div>
          <div className={Book.inputbox}>
            <span>Drop</span>
            <input type="text" required onChange={(e)=>setDrop(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="location" id="" />
          </div>
          <div className={Book.inputbox}>
            <span>Pick-Up Date</span>
            
            <input type="datetime-local" required onChange={(e)=>setPickpupdate(e.target.value)} style={{padding:'7px' ,outline:"none",border:'none'}} name="pick" id="" />
            
            </div>
          <div className={Book.inputbox}>
            <span>Return Date</span>
            
            <input type="datetime-local" required onChange={(e)=>setDropdate(e.target.value)} style={{padding:'7px',outline:"none",border:'none'}} name="return" id="" />
           
            
            </div>
            <div className={Book.inputbox}>
              <button style={{padding:'7px',marginTop:'25%',outline:"none",border:'none',cursor:'pointer',background:'#0d6efd',border:"none",borderRadius:'5px',color:'#fff',fontSize:'18px'}}>Submit</button>
            </div>
            </form>
        </div>
      
    </div>
  )
}
