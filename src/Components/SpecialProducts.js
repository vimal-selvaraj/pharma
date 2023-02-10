import React from 'react'
import { Carousel } from 'react-bootstrap';
import specialProduct from '../assets/images/special-product.jpg'
const SpecialProducts = ({specialProducts}) => {
  return (
    <>
      <Carousel>
    {
        Array(specialProducts).fill(0).map((e,i)=>{
            return(
              
                <Carousel.Item key={i}>
                <div className='img-wrapper'>
                      <img src={specialProduct} alt="home-banner" />
                    </div>
                  <Carousel.Caption>
                  <div className='special-products-content'>
                      <h2>Pharma content</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
            
            )
        })
    }
      </Carousel>
    </>
  )
}

export default SpecialProducts