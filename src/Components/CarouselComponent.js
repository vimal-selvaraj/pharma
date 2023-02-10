import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from 'react-bootstrap/Card';
import {BiTimeFive} from 'react-icons/bi';
import blog from '../assets/images/blog-product.png'

const CarouselComponent = ({cards}) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ]
  return (
    <>
    <Carousel breakPoints={breakPoints}>
  {
    Array(cards).fill(0).map((e,i)=>{
      return(
<Card style={{ width: '18rem' }} key={i}>
      <Card.Img variant="top" src={blog} alt="blog" />
      <Card.Body>
        <Card.Title>Products</Card.Title>
        <Card.Text>
          <div className='date-time'>
            <span><BiTimeFive/></span>
            <span className='ms-2'>September 18, 2021</span>
          </div>
         <div className='content'>
         Some quick example text to build on the products and make up the
          bulk of the product's content.
         </div>
         <span className='read-more'>Read More</span>
        </Card.Text>
      </Card.Body>
    </Card>
      )
    })
  }


</Carousel>
    </>
  )
}

export default CarouselComponent