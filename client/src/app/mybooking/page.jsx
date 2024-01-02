'use client'
import { useEffect,useState } from "react";
import myBooking from '../mybooking/myBooking.module.css'
export default  function page()  {
  const [data, setData] = useState([])
  const [pickup, setPickup] = useState()
    const user=JSON.parse(localStorage.getItem('user'))
    const userid=user._id;
    async function handelfunction(){
      try {
        const res= await fetch('http://localhost:3002/mybooking',
      {
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          userid:userid
        })
      })
      const  result=await res.json();
      const bookresult=result.book;
      console.log(result)
      return setData(bookresult); 
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      handelfunction()
    }, [])
  
  return (
  
    <div >
      <table className={myBooking.table}>
        <tr className={myBooking.row} style={{backgroundColor:'#0d6efd'}}>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Pickup Date</th>
            <th>Drop Date</th>
            <th>Status</th>
        </tr>
      
        {
        data.map((item)=>(
          <tr className={myBooking.row}>
        
           <td> {item.pickup}</td>
           <td>{item.drop}</td>
           <td>{item.pickupdate}</td>
           <td>{item.dropdate}</td>
           <td>{item.status}</td>
          
          </tr>
        ))
        }
        </table>
    </div>
  )
}


