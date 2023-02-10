import React from 'react';
import banner from '../assets/images/home-banner.png'
import about from '../assets/images/about.png'
import vision from '../assets/images/vision.png'
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import BackToTop from '../Components/Common/BackToTop';
import Products from '../Components/Products';
import ChatBox from '../Components/Common/ChatBox';
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Partners from '../Components/Partners';
import SpecialProducts from '../Components/SpecialProducts';
import { Carousel } from 'react-bootstrap';

const Home = () => {
 
  return (
    <>
        <SkeletonTheme baseColor="#ccc" highlightColor="#f2f2f2">
     <div className='home-page'>
        <section className='home-banner text-dark'>
          <Header />
          <Carousel>
      <Carousel.Item>
      <div className='img-wrapper'>
            <img src={banner} alt="home-banner" />
          </div>
        <Carousel.Caption>
        <div className='home-content'>
            <p>Start your treatment with</p>
            <h1>Pharma content</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-wrapper'>
            <img src={banner} alt="home-banner" />
          </div>

        <Carousel.Caption>
        <div className='home-content'>
            <p>Start your treatment with</p>
            <h1>Pharma content</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img-wrapper'>
            <img src={banner} alt="home-banner" />
          </div>

        <Carousel.Caption>
        <div className='home-content'>
            <p>Start your treatment with</p>
            <h1>Pharma content</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         
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
                <h2>Meet Pharma</h2>
                <p>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum </p>
                <button className='button-primary'>Get Started</button>
              </div>
            </div>
          </div>
        </section>
        <section className='products'>
        <div className='container'>
        <div className='head-section text-center'>
            <h1>Top Selling Products</h1>
          </div>
       <Products/>
        </div>
        </section>
        <section className='vision-mission container mt-5'>
        <div className='head-section text-center'>
            <h1>Our Vision & Our Mission</h1>
          </div>
          <div className='row mt-5'>
            <div className='col-12 col-md-6 col-lg-6 p-0'>
              <div className='img-wrapper'>
                <img src={vision} alt="vision" />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6 d-flex align-items-center'>
             <div className='vision-content'>
             <h2>OUR VISION</h2>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
             </div>
            </div>
          </div>
          <div className='row mission-row'>
            <div className='col-12 col-md-6 col-lg-6 d-flex align-items-center'>
             <div className='mission-content'>
             <h2>OUR MISSION</h2>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
             </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6 p-0'>
              <div className='img-wrapper'>
                <img src={vision} alt="mission" />
              </div>
            </div>

          </div>
        </section>
        <section className='special-products'>
          <div className='head-section text-center container'>
            <h1>We are Good in</h1>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </div>
           <SpecialProducts specialProducts={3} />
        </section>
        <section className='partners'>
          <div className='head-section text-center'>
            <h1>Our Partners</h1>
          </div>
          <div className='partners-content'>
           <div className='partners-list py-5  container'>
           <Partners/>
           </div>
          </div>
        </section>
        <section className='slogan text-center container'>
          <div className='slogan-content'>
            <p>"LOrem ipsum lorem ipsum lorem ipsum lorem ipsum"</p>
            <h4>Pharma</h4>
          </div>
        </section>
        <BackToTop/>
        <Footer/>
      </div>
      <ChatBox/>
      </SkeletonTheme>
    </>

  )
}

export default Home