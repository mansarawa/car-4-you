import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Service from './service.module.css'
import Cardriver from '../../../assets/cardriver.png'
import Weddingcar from '../../../assets/weddingcars.png'
import Image from 'next/image'
import Carservice from '../../../assets/carservice.png'
export default function page() {
  return (
    <div className='container'>
      <h1 className={Service.heading}>OUR SERVICES</h1>
      <div className={Service.servicebox}>
        <div className={Service.carservice}>
          <Image src={Carservice} className={Service.imgser} />
          <div className={Service.txtbox}>
            <h1>Car Service</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sapiente necessitatibus? Quos nesciunt ea obcaecati praesentium similique deleniti at veritatis.</h2>

          </div>

        </div>
        <div className={Service.carservice}>
          <Image src={Cardriver} style={{ borderRadius: '100%', width: '200px', height: '200px' }} />
          <div className={Service.txtbox}>
            <h1>Driver</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam rem suscipit dicta obcaecati illum accusamus sequi saepe labore, nulla ex consequuntur nesciunt, cumque ratione minima tempore delectus neque commodi.</h2>

          </div>
        </div>
        <div className={Service.carservice}>
          <Image src={Weddingcar} style={{ borderRadius: '100%', width: '200px', height: '200px' }} />
          <div className={Service.txtbox}>
            <h1>Wedding car</h1>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, qui beatae eius, temporibus aut minima veritatis repellendus laudantium non aperiam totam pariatur doloremque quas obcaecati incidunt veniam magni suscipit molestias.</h2>
          </div>

        </div>
        <div className={Service.carrent}>

        </div>

      </div>
    </div>
  )
}
