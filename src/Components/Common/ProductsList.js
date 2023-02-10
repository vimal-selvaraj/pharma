import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import product from '../../assets/images/bringa-hair-oil.png';
import SkeletonCard from '../../Shared/SkeletonCard';
import { addtoCart } from '../../Redux/Actions/CartAction';
import { fetchProducts } from '../../Redux/Actions/AllProductsActions';
import { ADD_TO_CART } from '../../Redux/Actions/Types/ActionTypes';
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs'
const ProductsList = ({products}) => {
    // console.log("productssss",products);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    // const products=useSelector(state=>state.allProducts)
    // useEffect(()=>{
    //     dispatch(fetchProducts())
    // },[])
   
  return (
    <div className='product-gallery'>
    <div className='row'>
        {
products.allProducts.length>0?( products.allProducts.map((e,i)=>{
return(
<div className='col-12 col-md-6 col-lg-3' key={i} >

<div className='product'>
<div className='product-image' onClick={()=>{navigate(`/productDetails/${i+1}`)}}>
  <span className={e.badge==="Trending"?"product-badge trending":"product-badge offer"}>{e.badge}</span>
  <img src={e.imgUrl} alt="product"  />
  <div className='product-description'>
    <p>{e.description}</p>
  </div>
</div>
<div className='product-price-details' >
    <h6 className='product-name' >{e.name}</h6>
    <div className='star-rating-wrapper d-flex'>
                                    <div className='stars me-2'>
                                        <span><BsStarFill/></span>
                                        <span><BsStarFill/></span>
                                        <span><BsStarFill/></span>
                                        <span><BsStarHalf/></span>
                                        <span><BsStar/></span>
                                    </div>
                                    <span>4.0 Ratings</span>
                                </div>
    <p className='product-price'>MRP:&#8377;{e.price}</p>
    <p>Free Delivery</p>
</div>
<div className='actions text-center'>
    <button className='button button-primary' onClick={()=>{dispatch({type:ADD_TO_CART,payload:e})}} >Add to Cart</button>
</div>
</div>


</div>
)
})):(<SkeletonCard cards={8}/>)
        }
    </div>
  </div>
  )
}

export default ProductsList