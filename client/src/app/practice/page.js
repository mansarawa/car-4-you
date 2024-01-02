'use client'
import React from 'react'
import { useState,useEffect } from 'react'
export default function page ()  {
    const [product,setProduct]=useState([])
    
    useEffect(async()=>{
        let data=await fetch('https://dummyjson.com/products')
        data=await data.json();
        console.log(data)
        setProduct(data.products)
    },[]);
  
  return (
    <div>
      {
        product.map((item)=>(
         
            <p>{item.title}</p>
              
        ))
      }
      
    </div>
  )
}


