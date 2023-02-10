import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import product from '../assets/images/bringa-hair-oil.png'
import { CiPercent } from 'react-icons/ci'
import { TbChecklist } from 'react-icons/tb'
import { AiFillFacebook ,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs'
import CarouselComponent from '../Components/CarouselComponent'
import offerstag from '../assets/images/offers-tag.png'
import PaymentMethods from '../Components/PaymentMethods'
import Reviews from '../Components/Reviews'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../Components/Common/Layout'
import { fetchProduct } from '../Redux/Actions/SelectedProductAction'


const Productdetail = () => {
    const selected=useSelector(state=>state.selectedProduct);
    // const[selectedProduct,setSelectedProduct]=useState([]);
    const dispatch=useDispatch();

    const productId=useParams();
   
    useEffect(()=>{
        dispatch(fetchProduct(productId.id));
    },[]);
    console.log("Selected",selected);
    return (
        <div>
         <Layout>
         <div className='header-navigation-section'>
          <Header />
          </div>
            <section className='product-details container'>
                <div className='row m-0'>
                    <div className='col-12 col-md-6'>
                        <div className='product-img-wrapper d-flex justify-content-center align-items-center'>
                            <img src={product} alt="product-image" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='single-product-details'>
                            <h2>Bringa Hair Oil</h2>
                            <div className='price d-flex'>
                                <h1 className='price-amount'>
                                    MRP: &#8377; 267
                                </h1>
                                <span className='old-price mx-3'>&#8377; 297</span>
                                <span className='off-percentage'>20% Off</span>
                            </div>
                            <span>(Incl. of all taxes)</span>
                            <div className='rating-link-share-details d-flex align-items-center'>
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
                                <div className='rating-link'>
                                    <span>Rate this Product</span>
                                </div>
                                <div className='share-details d-flex'>
                                    <span className='share-to'>Share to:</span>
                                    <div className=' ms-2 social-media-wrapper d-flex'>
                                        <span><AiFillFacebook/></span>
                                        <span><AiFillInstagram/></span>
                                        <span><AiFillTwitterCircle/></span>
                                    </div>
                                </div>
                            </div>
                            <div className='short-description'>
                                <h6>Description:-</h6>
                                <p>loremSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, t</p>
                            </div>
                            <div className='product-highlights'>
                                <h6>Product Highlights:-</h6>
                                <ul>
                                    <li>Lorem loremSed ut perspiciatis unde omnis iste natus error sit voluptatem</li>
                                    <li>Lorem loremSed ut perspiciatis unde omnis iste natus error sit voluptatem</li>
                                    <li>Lorem loremSed ut perspiciatis unde omnis iste natus error sit voluptatem</li>
                                </ul>
                            </div>
                            <div className='availability d-flex'>
                                <label>Stock:</label>
                                <span>95 in stock</span>
                            </div>
                            <div className='size d-flex'>
                                <label>Size:</label>
                                <ul className='d-flex'>
                                    <li><span className='active'>75 Gm</span></li>
                                    <li><span>175 Gm</span></li>
                                    <li><span>275 Gm</span></li>
                                </ul>
                            </div>
                          
                            <div className='action-buttons d-flex'>
                                <button className='button-primary me-2'><Link to='/cart' >Add to cart</Link></button>
                                <button className=' ms-2 button-secondary'>Buy Now</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row mt-5 mx-0'>
                    <div className='col-12 col-md-6'>
                        <div className='special-offers'>
                            <h2>Special Offers</h2>
                            <ul>
                                <li><span><CiPercent /></span>lorem ipsum lorem lorem</li>
                                <li><span><CiPercent /></span>lorem ipsum lorem lorem</li>
                                <li><span><CiPercent /></span>lorem ipsum lorem lorem</li>
                                <li><span><CiPercent /></span>lorem ipsum lorem lorem</li>
                            </ul>
                            <img src={offerstag} alt='offer'/>
                        </div>
                    </div>
                   <div className='col-12 col-md-6'>
                   <div className='origin-details'>
                        <div className='row detail'>
                            <div className='col-4'>
                                <label>Country of Origin:</label>
                            </div>
                            <div className='col-8'>
                                <span>India</span>
                            </div>
                        </div>
                        <div className='row detail'>
                            <div className='col-4'>
                                <label>Manufactured By:</label>
                            </div>
                            <div className='col-8'>
                                <p>XYZ (INDIA) Pvt. Ltd
                                    185, service Road, Chennai District, Tamil Nadu - 638 001</p>
                            </div>
                        </div>
                        <div className='row detail'>
                            <div className='col-4'>
                                <label>Marketed By:</label>
                            </div>
                            <div className='col-8'>
                                <p>XYZ (INDIA) Pvt. Ltd
                                    185, service Road, Chennai District, Tamil Nadu - 638 001</p>
                            </div>
                        </div>
                        <div className='row detail'>
                            <div className='col-4'>
                                <label>Contact us:</label>
                            </div>
                            <div className='col-8'>
                                <p>Email: xyz@gmail.com</p>
                                <p>Phone: +91-99625136655</p>
                            </div>
                        </div>

                    </div>
                   </div>
                </div>
                <div className='product-description'>
                    <h2>Product Description</h2>
                    <div className='product-description-details'>
                        <p>White Soap is prepared using natural ingredients in accordance with the rich knowledge of the centuries-old ayurvedic tradition. It combines the benefits of coconut milk and virgin coconut oil</p>
                   <div className='ingredients'>
                   <h2>Directions To Use</h2>
                    <ul>
                        <li><TbChecklist/> <span>lorem ipsum</span></li>
                        <li><TbChecklist/> <span>lorem ipsum</span></li>
                        <li><TbChecklist/> <span>lorem ipsum</span></li>
                        <li><TbChecklist/> <span>lorem ipsum</span></li>
                        <li><TbChecklist/> <span>lorem ipsum</span></li>
                    </ul>
                   </div>
                    </div>
                </div>
            </section>
           <Reviews/>
            <section className='related-products'>
                <div className='head-section text-center'>
                    <h1>Related Products</h1>
                </div>
                <CarouselComponent cards={8}/>
            </section>
           <PaymentMethods/>
         </Layout>
           
        </div>
    )
}

export default Productdetail