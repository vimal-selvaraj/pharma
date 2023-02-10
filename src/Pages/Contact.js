import React from 'react'
import Header from '../Components/Common/Header'
import banner from '../assets/images/contact-banner.jpg'
import Iframe from 'react-iframe'
import Layout from '../Components/Common/Layout'



const Contact = () => {
  return (
    <>
    <Layout>
    <div className='home-banner contact text-dark'>
       <Header/>
        <div className='img-wrapper'>
          <img src={banner} alt="home-banner" />
        </div>
        <div className='home-content'>
          <h1>Contact Us</h1>
        </div>
      </div>
    <div className='contact-page-details'>
       <div className='container'>
       <div className='row m-0'>
            <div className='col-12 col-md-6'>
                <form>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                            <label>Name</label><span className='required'>*</span>
                            <div className='custom-input'><input placeholder='Enter Your Name'/></div>
                        </div>
                        <div className='col-6 mb-3'>
                            <label>Email Id</label><span className='required'>*</span>
                            <div className='custom-input'><input placeholder='Enter Your Email Id'/></div>
                        </div>
                        <div className='col-6 mb-3'>
                            <label>Phone Number</label>
                            <div className='custom-input'><input placeholder='Enter Your Phone number'/></div>
                        </div>
                        <div className='col-6 mb-3'>
                            <label>Subject</label>
                            <div className='custom-input'><input placeholder='Type Subject'/></div>
                        </div>
                        <div className='col-12 mb-3'>
                            <label>Your Message</label>
                            <div className='custom-textarea'><textarea rows='6' placeholder='Describe your Message'></textarea></div>
                        </div>
                        <div className='col-12 mb-3 text-center submit-btn'>
                            <button className='button-primary'>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-12 col-md-6'>
           
         <div className='map'>
         <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.342511345043!2d80.2448403!3d13.1095974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b9136010a3f5d27!2sYazhi%20Software%20Solutions!5e0!3m2!1sen!2sde!4v1672831905560!5m2!1sen!2sde"
        width="640px"
        height="320px"
        id="map"
        className="map-section"
        display="block"
        position="relative"/> 
         </div>
            </div>
        </div>
       </div>
    </div>
      </Layout>   
    </>
  )
}

export default Contact