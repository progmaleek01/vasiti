import React from 'react'
import './header.css'
import LOGO1 from '../../assets/logo/Vector-1.png'
import LOGO2 from '../../assets/logo/Vector-2.png'

const Header = () => {
  return (
    <div className='container container-header'>
        <div className="logo">
          <div className="logo-container">
            <img className='logo-b' src={LOGO1} alt="" />
            <img className='logo-w' src={LOGO2} alt="" />
          </div> 
          <div className="name">
            <h2 className='vas'>Vasiti</h2>
            <p>.com</p>
          </div>
          
          
        </div>
        <div className="navigation">
            <ul>
                <li>ABOUT US</li>
                <li>STORIES</li>
                <li>CONTACT</li>
            </ul>
            <button className='btn-log'>LOG IN</button>
            <button className='btn'>SIGN UP</button>
        </div>
    </div>
  )
}

export default Header