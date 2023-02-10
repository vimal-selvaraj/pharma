import React from 'react'
import banner from '../assets/images/about-banner.jpg'
import about from '../assets/images/about.png'
import Header from '../Components/Common/Header'
import Layout from '../Components/Common/Layout'

const About = () => {
  return (
    <div>
     <Layout>
     <section className='home-banner text-dark'>
        <Header />
        <div className='img-wrapper'>
          <img src={banner} alt="home-banner" />
        </div>
        <div className='home-content'>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </section>
      <section className='who-we-are text-center'>
        <div className='about-content'>
          <h1>WHO WE ARE</h1>
          <p>lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </div>
      </section>
      <section className='about container'>
          <div className='row m-0'>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='left-column '>
                <div className='img-wrapper'>
                  <img src={about} alt="pharma" />
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='right-column'>
                <h2>Our Team</h2>
                <div className='team-details'>
                  <span>Vanessa Barboni Hallik </span>
                  <span> - Founder & CEO</span>
                </div>
                <div className='team-details'>
                  <span>Jane </span>
                  <span> - Director</span>
                </div>
                <div className='team-details'>
                  <span>Tessa  </span>
                  <span> - Vice President</span>
                </div>
                <div className='team-details'>
                  <span>Hannah </span>
                  <span> - Development Head</span>
                </div>
                <div className='team-details'>
                  <span>Grace</span>
                  <span> - Sales & Marketing Head</span>
                </div>
                <div className='team-details'>
                  <span>Michael</span>
                  <span> - Sustainability Advisor</span>
                </div>
               
              </div>
            </div>
          </div>
        </section>
        <section className='mission text-center'>
          <div className='mission-content'>
          <h1>We concentrate on</h1>
            <p>"lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"</p>
          </div>
        </section>
     </Layout>
    </div>
  )
}

export default About