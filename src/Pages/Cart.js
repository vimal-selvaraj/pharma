import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import PaymentMethods from '../Components/PaymentMethods'
import product from '../assets/images/bringa-hair-oil.png';
import { CiPercent } from 'react-icons/ci'
import { BiCaretRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Layout from '../Components/Common/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { DECREASE, INCREASE, REMOVE } from '../Redux/Actions/Types/ActionTypes';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const[totalPriceAmount,setTotalPriceAmount]=useState(0);
    const dispatch = useDispatch();
    const totalPrice=cartItems.length>0?(cartItems.reduce((acc,curr)=>{return acc+curr.price*curr.qty},0)):0;
  useEffect(()=>{
setTotalPriceAmount(totalPrice);
  },[totalPrice])
    return (
        <div>
            <Layout>
                <div className='header-navigation-section'>
                    <Header />
                </div>
                <section className='cart' >
                    <div className='head-section text-center'>
                        <h1>My Cart</h1>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='row'>
                                    <div className='col-12'>
                                        {
                                            cartItems.length ? (
                                                cartItems.map((item, index) => {
                                                    return (
                                                        <div className='card ' key={index} >
                                                            <div className='wrapper d-flex justify-content-between'>
                                                                <div className='left-side'>
                                                                    <div className='d-flex'>
                                                                        <div className='img-wrapper'>
                                                                            <img src={item.imgUrl} alt='products' />
                                                                        </div>
                                                                        <div className='mid'>
                                                                            <h5 className='text-bold title'>{item.name}</h5>

                                                                            <div className='stock-details'><span className={item.availability ? "in-stock" : "out-of-stock"}>{item.availability ? "In Stock" : "Out of Stock"}</span></div>
                                                                            <div className='item-size d-flex'>
                                                                                <label>Size:</label>
                                                                                <div className='size'>
                                                                                    <select>
                                                                                        {
                                                                                            item.size.map((size, ind) => { return (<option key={ind}>{size}</option>) })
                                                                                        }
                                                                                    </select>
                                                                                    <span>gm</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className='text-bold item-quantity d-flex'>
                                                                                <label>Quantity:</label>
                                                                                <span className='increment-decrement' onClick={() => { dispatch({ type: INCREASE, payload: item }) }}>+</span>
                                                                                <span className='item-quantity'>{item.qty}</span>
                                                                                <span className='increment-decrement' onClick={() => { item.qty>1?(dispatch({ type: DECREASE, payload: item })):(dispatch({type:REMOVE,payload:item})) }} >-</span>
                                                                            </div>
                                                                            <div className='remove'>
                                                                                <span className='remove-item' onClick={()=>{dispatch({type:REMOVE,payload:item})}} >Remove</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='right-side'>
                                                                    <h5>Price</h5>
                                                                    <div className='price-details'>
                                                                        <span>MRP:&#8377;</span><span>{item.qty > 0 ? (item.qty * parseInt(item.price)) : item.price}</span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            ) : (<h6>No Items in the cart</h6>)
                                        }


                                    </div>

                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='apply-offers d-flex justify-content-between align-items-center'>
                                    <span><CiPercent />Apply Offers </span>
                                    <BiCaretRight />
                                </div>

                                <div className='card proceed-to-checkout' >

                                    <div className='card-header price '>ORDER SUMMARY</div>
                                    <div className='card-body summary'>
                                        <div className='d-flex justify-content-between'>
                                            <p>Price</p>
                                            <span>&#8377;{totalPriceAmount}</span>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p>Discount</p>
                                            <span>&#8377; -200</span>
                                        </div>
                                        {/* <div className='d-flex justify-content-between'>
                                            <p>GST</p>
                                            <span>&#8377; 100</span>
                                        </div> */}
                                        <div className='d-flex justify-content-between'>
                                            <p>Delivery Charges</p>
                                            <span>&#8377; 0.00</span>
                                        </div>
                                        <div className='d-flex justify-content-between total-price'>
                                            <p className=' price'>Total price</p>
                                            <span className='price'>&#8377; {totalPriceAmount>0?(totalPriceAmount-200-0):0}</span>
                                        </div>
                                    </div>


                                    <button className='btn button-primary checkout-btn'><Link to='/shipping' >Proceed to checkout</Link></button>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <PaymentMethods />
            </Layout>

        </div>
    )
}

export default Cart