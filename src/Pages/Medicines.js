import React, { useEffect } from 'react'
import banner from '../assets/images/about-banner.jpg'
import Header from '../Components/Common/Header'
import Layout from '../Components/Common/Layout'
import ProductsList from '../Components/Common/ProductsList'
import { useSelector ,useDispatch} from 'react-redux'
import {fetchProducts} from '../Redux/Actions/AllProductsActions'

const Gallery = () => {
  const products=useSelector(state=>state.allProducts);
  const dispatch=useDispatch()
  // console.log("products array",products);
  useEffect(()=>{
  dispatch(fetchProducts());
  },[])

  return (
    <>
    <Layout>
    <section className='home-banner text-dark'>
        <Header />
        <div className='img-wrapper'>
          <img src={banner} alt="home-banner" />
        </div>
        <div className='home-content'>
          <h1>Gallery</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </section>
      <section className='products-section container'>

        <ProductsList products={products}/>
      </section>
    </Layout>
       
    </>
  )
}

export default Gallery