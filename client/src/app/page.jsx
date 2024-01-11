'use client'
import Link from 'next/link'

import Page from './page.module.css'
import Image from 'next/image'
import Fortuner from '../../assets/fortuner.png'
import Thar from '../../assets/thar.jpg'
import UserPhoto from '../../assets/userphoto.jpg'
import Swift from '../../assets/swift.jpg'
import Ertiga from '../../assets/ertiga.jpeg'
export default function Home() {
 
   const user=JSON.parse(localStorage.getItem('user'))
  const handlelogout=async(e)=>{
    e.preventDefault();
    localStorage.clear("user") 
  }
  return (
    <body style={{ margin: '0px' }}>


      <div className={Page.container}>
        <nav className={Page.hnav}>
          <ul className={Page.ul}>

            <li className={Page.li}><Link href='/' className={Page.link}>Home</Link></li>
            <li className={Page.li}><Link href='/service' className={Page.link}>Services</Link></li>
            <li className={Page.li}><Link href='/terms' className={Page.link}>Terms&conditions</Link></li>
            {!user && <li className={Page.li}><Link href='/registeruser' className={Page.link}>Register</Link></li>}
            {!user ? <li className={Page.li}><Link href='/login'  className={Page.link}>Login</Link></li>
            :<><li className={Page.li}><Link  href='/mybooking'className={Page.link} >My Bookings</Link></li>
            <li className={Page.li}><Link onClick={handlelogout} href='' id={Page.logout} className={Page.link} >Logout</Link></li> </>}
            <div className={Page.burger}>
              <div className={Page.line}></div>
              <div className={Page.line}></div>
              <div className={Page.line}></div>
          </div>
          </ul>
          
        </nav>
        <header className={Page.header}>
          <div className={Page.hometext}>
            <h1 className={Page.movingtext} style={{ fontSize: '50px', marginBottom: '0' }}>CAR4YOU</h1>
            <h2 style={{ fontSize: '25px', marginTop: '0%' }}>"Discover Freedom on Four Wheels."</h2>
            <div className={Page.homebutton}>
              <button style={{ fontSize: '20px',backgroundColor:'#0d6efd', color: 'white', padding: '7px 13px 7px 13px', border: "none", borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>Get Details</button>
              <button style={{ fontSize: '20px',backgroundColor:'#0d6efd', color: 'white', padding: '7px 13px 7px 13px', border: "none", borderRadius: '5px', cursor: 'pointer' }}>Explore More</button>
            </div>
          </div>
          <div className={Page.homeimage}>
            <Image
              src={Fortuner} className={Page.homefortuner}/>
          </div>

        </header>
        <section className={Page.section}>
        <h1 style={{fontSize: '35px',textAlign:'center', textAlign:'center', paddingTop: '2%', marginBottom: '5px' }}>Explore Our Top Deals</h1>
        <h1 className={Page.dealerheading}>From Top Rated Delear</h1>
       
        <main className={Page.main}>

          <div className={Page.cars}>
            <Image src={Fortuner} className={Page.carslogo} />
            <h4 className={Page.model} >2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            {user ?<Link href={'/book'} className={Page.rent} >Rent now</Link>
              :<Link href={'/login'} className={Page.rent} >Rent Now</Link>}
          </div>
          <div className={Page.cars}>
            <Image src={Thar} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
          <div className={Page.cars} >
            <Image src={Swift} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
          <div className={Page.cars}>
            <Image src={Ertiga} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
          <div className={Page.cars}>
            <Image src={Fortuner} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
          <div className={Page.cars}>
            <Image src={Fortuner} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
          <div className={Page.cars}>
            <Image src={Fortuner} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
          <div className={Page.cars}>
            <Image src={Fortuner} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
          <div className={Page.cars}>
            <Image src={Fortuner} className={Page.carslogo} />
            <h4 className={Page.model}>2017</h4>
            <h3 style={{marginBottom:'1%'}}>Fortuner</h3>
            <h3 style={{ color: 'coral', marginBottom: '4%' }}>200₹ per Hour</h3>
            <Link href={'/book'} className={Page.rent}> Rent Now</Link>
          </div>
        </main>
        <section>
          <h1 className={Page.customer}>CUSTOMER EXPERIANCE</h1>
        </section>
        <div className={Page.testimonial}>

          <div className={Page.testbox}>
            <Image src={UserPhoto} className={Page.testimage} />
            <h2 style={{display:'flex',justifyContent:'center'}}> Ramesh Sharma</h2>
            <h3 style={{display:'flex',justifyContent:'center'}}>Lorem ipsum dolor sit amet consect, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in asperiores magnam quia quam nulla. Rem maiores quibusdam soluta hic corporis quis error eaque perspiciatis atque! Perferendis, quo laboriosam.</h3>
          </div>
          <div className={Page.testbox}>
            <Image src={UserPhoto} className={Page.testimage}/>
            <h2 style={{display:'flex',justifyContent:'center'}}>Suresh Sharma</h2>
            <h3 style={{display:'flex',justifyContent:'center'}}>Lorem ipsum dolor sit amet consec, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in asperiores magnam quia quam nulla. Rem maiores quibusdam soluta hic corporis quis error eaque perspiciatis atque! Perferendis, quo laboriosam.</h3>
          </div>
          <div className={Page.testbox}>
            <Image src={UserPhoto} className={Page.testimage} />
            <h2 style={{display:'flex',justifyContent:'center'}}>Mahesh Sharma</h2>
            <h3 style={{display:'flex',justifyContent:'center'}}>Lorem ipsum dolor sit amet consect, adipisicing elit. Blanditiis, excepturi sapiente dignissimos doloribus consectetur dolore ipsam culpa laboriosam dolorum temporibus in asperiores magnam quia quam nulla. Rem maiores quibusdam soluta hic corporis quis error eaque perspiciatis atque! Perferendis, quo laboriosam.</h3>
          </div>
        </div>
        </section>
        <footer>
      
          <div className={Page.footermain}>
            <div className={Page.item}>
              <h1>CAR4YOU</h1>
            <div className={Page.footermenu}>
            
            <Link href='/service' className={Page.link} style={{marginTop:'2%',fontSize:'20px',color:'white'}}>Services</Link>
            <Link href='/terms' className={Page.link} style={{marginTop:'2%',fontSize:'20px',color:'white'}}>Terms&conditions</Link>
            
            </div>
            </div>
            <div className={Page.item}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14202.987360075716!2d74.8523169!3d27.1327827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b7928ccd939c3%3A0x1e9a0504ab3b6120!2sCar%204%20you%20kuchaman!5e0!3m2!1sen!2sin!4v1700743212490!5m2!1sen!2sin" style={{width:"200px", height:"100px", border:0, allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
            </div>
            <div className={Page.item}>
              <h3> D-24, Midc Phase Ii, Manpada Rd</h3>
              <h3>+91-9595958696</h3>
              <h3>car4you@gmail.com</h3>
            </div>
          </div>
        </footer>
      </div>
    </body>
  )
}
