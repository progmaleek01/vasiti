import React from 'react'
import './exbanner.css'
import LINE from '../../assets/experience/Vector 3.png'
import IMAGE from '../../assets/experience/black-beautiful-ladies-smiling 1.png'

const Exbanner = () => {
  return (
    <div className='container-large '>
      <div className='container-exp'>

      
      <div className="image">
        <img src={IMAGE} alt="" />

      </div>

      <div className="details">
        <div className="top">
          <h1>Tolu & Joy’s Experience</h1>
        <div className="customer">Customer</div>
        </div>

        <div className="middle">
        <h3>I had the best experience shopping with vasiti. <br /> Usability of the website was great, very good customer service, an all round great experience. <br /> I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great,
           very good customer service, an all round great experience. I
            would definately be coming back!
            
            </h3>
        </div>

        <div className="last">
          <h3>Share your own story!</h3>
          <img src={LINE} alt="" />
        </div>
        
     
      </div>
      </div>
    </div>
  )
}

export default Exbanner