import React from 'react'
import banner from '../assets/images/community-banner.png'
import Header from '../Components/Common/Header'
import CarouselComponent from '../Components/CarouselComponent'
import UpcomingEvents from '../Components/UpcomingEvents'
import Layout from '../Components/Common/Layout'
const Community = () => {

  return (
    <div>
      <Layout>
      <section className='home-banner text-dark'>
        <Header />
        <div className='img-wrapper'>
          <img src={banner} alt="home-banner" />
        </div>
        <div className='home-content'>
         </div>
      </section>
      <section className='testimonials'>
        <div className='head-section container text-center mb-5'>
          <h1>Our people says</h1>
        </div>
        <CarouselComponent cards={8}/>
      </section>
      <section className='connect-with-us container'>
       <div className='head-section text-center'>
       <h1>Stay Connect with Us</h1>
       </div>
       <div className='event-details-wrapper'>
        <h2>Up Next...</h2>
     <UpcomingEvents events={3}/>
       </div>
      </section>
      </Layout>
      
    </div>
  )
}

export default Community