'use client'
import React from 'react'
import Admin from './admin.module.css'
import { useEffect,useState } from 'react';
export default function page()  {
 
  const [data, setData] = useState([])
  async function printData(){
    try {
    const res=await fetch('http://localhost:3002/admin',{
      method:'get',
      headers:{
        'Content-Type':'appplication/json'
      }
    })

    const result=await res.json();
    const finalresult=result.data;
    return setData(finalresult)
    console.log(result)
  } catch (error) {
      console.log(error)
  }
  }
  useEffect(() => {
   printData();
  }, [])
  const [accept, setAccept] = useState(false)
  const handelaction=async(req,res)=>
  {
    setAccept(true)

  }
  return (
    <div>
       <table >
        <tr  style={{backgroundColor:'#0d6efd'}}>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Pickup Date</th>
            <th>Drop Date</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
      
        
      {
        data.map((item)=>(
          <>
 <tr >
        
        <td> {item.pickup}</td>
        <td>{item.drop}</td>
        <td>{item.pickupdate}</td>
        <td>{item.dropdate}</td>
        <td>{item.status}</td>
        <td><div className={Admin.action}>
          <button onClick={handelaction} className={Admin.btn}>Accept</button>
          <button className={Admin.btn}>Reject</button></div></td>
        </tr>
          </>
        ))
      }
      </table>
    </div>
  )
}
export accept
