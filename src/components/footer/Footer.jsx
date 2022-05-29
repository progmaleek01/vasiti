import React from 'react'
import './footer.css'
import IMAGE from '../../assets/subscribe-banner 1.png'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className="footer-1">
            <div className="footer-image"><img src={IMAGE} alt="" /></div>
            <div className="footer-details">
                <h1>Be a  member of our community 🎉</h1>
                <h5>We'd make sure you're always first to know what's happening on Vasiti—thus, the world.</h5>

                <div className="footer-input">
                    <input type="text" placeholder='enter your email address'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>

        </div>
        <div className="footer-2">
            <div className="company">
                <h4>Company</h4>
                <h5>About us</h5>
                <h5>Term of Use</h5>
                <h5>Privacy Policy</h5>
                <h5>Press & Media</h5>
            </div>

            <div className="company">
                <h4>products</h4>
                <h5>marketplace</h5>
                <h5>Magazine</h5>
                <h5>seller</h5>
                <h5>Wholesale</h5>
                <h5>Services</h5>
            </div>

            <div className="company">
                <h4>Careers</h4>
                <h5>Become a Campus Rep</h5>
                <h5>Become a Vasiti Influencer</h5>
                <h5>Become a Campus writer</h5>
                <h5>Become an Affiliate</h5>
            </div>

            <div className="company">
                <h4>Get in touch</h4>
                <h5>Contact us</h5>
                <h5>Partner with us</h5>
                <h5>Advertise with us</h5>
                <h5>Help/FAQs</h5>
            </div>

            <div className="company">
                <h4>Join our community</h4>
                <div className="icons">
                    <div className="icon-1"><FaFacebookF color='black'/></div>
                    <div className="icon-1"><FiInstagram color='black'/></div>
                    <div className="icon-1"><FaTwitter color='black'/></div>
                    <div className="icon-1"><FaLinkedinIn color='black'/></div>
                </div>
                <h5>Email Newsletter</h5>

            
                
            </div>
        </div>

    </div>
  )
}

export default Footer