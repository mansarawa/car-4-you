'use client'
import React, { useEffect, useState } from 'react';
import Admin from './admin.module.css';

export default function Page() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch('http://localhost:3002/admin', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();
      const finalResult = result.data;
      setData(finalResult);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleAccept(id) {
    try {
      const res = await fetch('http://localhost:3002/accept', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: id,
        }),
      });
      fetchData();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleComplete(id) {
    try {
      const res = await fetch('http://localhost:3002/completed', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: id,
        }),
      });
      fetchData();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    
  }

  async function handleReject(id) {
    try {
      const res = await fetch('http://localhost:3002/reject', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: id,
        }),
      });
      fetchData();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr style={{ backgroundColor: '#0d6efd' }}>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Pickup Date</th>
            <th>Drop Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.pickup}</td>
              <td>{item.drop}</td>
              <td>{item.pickupdate}</td>
              <td>{item.dropdate}</td>
              <td>{item.status}</td>
              <td>
                <div className={Admin.action}>
                  {item.status === 'accept' ? (
                    <button onClick={() => handleComplete(item._id)} className={Admin.btn}>
                      Completed
                    </button>
                  ) : item.status === 'process' ? (
                    <button onClick={() => handleAccept(item._id)} className={Admin.btn}>
                      Accept
                    </button>
                  ) : (
                    ''
                  )}
                  {item.status === 'completed'?"": item.status === 'process'?(
                    <button onClick={() => handleReject(item._id)} className={Admin.btn}>
                      Reject
                    </button>):('')
                  }
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
