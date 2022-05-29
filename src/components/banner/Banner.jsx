import React from 'react'
import './banner.css'
import PEOPLE from '../../assets/banner/Testimonial image 1.png'


const Banner = () => {
  return (
    <div className='container-banner'>
        <div className="detail">
            <h1>Amazing <br /> Experiences from Our Wonderful Customers</h1>
            <h4>Here is what customers and vendors are saying about us, you can share your stories with us too.</h4>
        </div>

        <div className="section2">
             <div className="circle"></div>
             <div className="people"> <img src={PEOPLE} alt="" /></div>
        </div>
           
        
    </div>
  )
}

export default Banner