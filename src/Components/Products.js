import React, { useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi';
import trending from '../assets/images/trending-product.png';
import { Link } from 'react-router-dom';
import ProductsList from './Common/ProductsList';
import {  fetchProducts } from '../Redux/Actions/AllProductsActions';
import { useDispatch,useSelector } from 'react-redux';
import { fetchGalleryMenuItems } from '../Redux/Actions/GallerymenuAction';

const Products = () => {
  const products=useSelector(state=>state.allProducts);
  const menuItems=useSelector(state=>state.galleryMenu);
  console.log(menuItems);
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(fetchProducts());
   dispatch(fetchGalleryMenuItems())
  },[]);

  return (
    <>
       <div className='product-details d-flex justify-content-between'>
            <div className='categories'>
              <ul className='d-flex'>
                {
                   menuItems.menu!==undefined&&menuItems.menu.length>0?( menuItems.menu.map((e,i)=>{
                    return(
                      <li key={i} className='menu-item'>
                      <span>{e.title}</span>
                      <div className='hidden-content'>
                        <ul className='sub-menu d-flex'>
                          {
                              e.subItems.map((item,index)=>{
                                 return(
                                  <li key={index}>
                                  <span>{item.title}</span>
                                  <ul>
                                      {
                                          item.subItemsList.map((ele,ind)=>{
                                             return(
                                              <li key={ind}><span>{ele}</span></li>
                                             )
                                          })
                                      }
                                  </ul>
                                </li>
                                 )
                              })
                          }
                        </ul>
                        <div className='new-arrival'>
                          <div className='img-wrapper'>
                            <img src={trending} alt='new arrival' />
                          </div>
                        </div>
                      </div>
                    </li>
                    )
                  })):null
                }
              </ul>
            </div>
            <div className='see-more'><Link>See More <FiArrowRight /></Link></div>
          </div>
       <ProductsList products={products} />
       
    </>
  )
}

export default Products