import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div className='container'>
      <div className='row m-0'>
            <div className='col-12 col-md-3 section-one'>
              <div className='footer-logo-wrapper'>
                <img src={logo} alt="logo"/>
              </div>
              <div className='address'>
               
                <p>XYZ pharma
COMPANY (INDIA) Pvt.Ltd,</p>
                <p>Guindy,</p>
                <p>Chennai- 600001</p>
              </div>
            </div>
            <div className='col-12 col-md-5 d-flex section-two'>
            <div className='row w-100'>
              <div className='col-6'>
              <div className='quick-links'>
                <h5>Quick Links</h5>
                <ul>
                <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/gallery'>Gallery</Link></li>
                  <li><Link to='/community'>Community</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </div>
              </div>
              <div className='col-6'>
              <div className='info'>
                <h5>Recent posts</h5>
              <ul>
                  <li><a href='#'>loremm ipsum</a></li>
                  <li><a href='#'>lorem</a></li>
                  <li><a href='#'>lorem</a></li>
                  <li><a href='#'>FAQ</a></li>
                </ul>
              </div>
              </div>
            </div>
            

            </div>
            <div className='col-12 col-md-4'>
              <div className='newsletter'>
                <h5>Contact Us</h5>
              </div>
              <div className='details'>
                <div className='contact-details'>
                  <label>Customer Support : </label>
                  <p>+91 9626533378 | 0424 – 2500590</p>
                </div>
                <div className='contact-details'>
                  <label>Sales & Marketing : </label>
                  <p>+91 9626533378 | 0424 – 2500590</p>
                </div>
                <div className='contact-details'>
                  <label>Email : </label>
                  <p>helpdesk@gmail.com</p>
                </div>
             
              </div>

            </div>
        </div>
      </div>
    </footer>
    <div className='copyrights'>
      <p>Copyrights @ <a href='www.yazhiss.com' target='_blank'>yazhisoftwaresolutions.com</a></p>
    </div>
    </>
  )
}

export default Footer