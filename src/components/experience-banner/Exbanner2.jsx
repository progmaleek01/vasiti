import React from 'react'
import './exbanner2.css'
import LINE from '../../assets/experience/Vector 3.png'
import IMAGE from '../../assets/experience/woman-shoppingbag-card 1.png'

const Exbanner2 = () => {
  return (
    <div className='container-large2 container-exp2 '>
      <div className='container-exp'>

      
      <div className="details">
        <div className="top2">
          <h1>Josiah’s Experience</h1>
        <div className="details-vendor">Vendor</div>
        </div>

        <div className="middle2">
        <h3>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!
            
            </h3>
        </div>

        <div className="last2">
          <h3>Share your own story!</h3>
          <img src={LINE} alt="" />
        </div>
        
     
      </div>

      <div className="image2">
        <img src={IMAGE} alt="" />

      </div>
      </div>
    </div>
  )
}

export default Exbanner2