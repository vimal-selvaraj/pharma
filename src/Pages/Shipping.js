import React from 'react'
import Header from '../Components/Common/Header'
import Footer from '../Components/Common/Footer'
import BackToTop from '../Components/Common/BackToTop'
import ChatBox from '../Components/Common/ChatBox'
import PaymentMethods from '../Components/PaymentMethods'
import { CiPercent } from 'react-icons/ci'
import { BiCaretRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Layout from '../Components/Common/Layout'

const Shipping = () => {
  return (
    <>
    <Layout>
    <div className='header-navigation-section'>
                <Header />
            </div>
            <section className='shipping'>
                <div className='head-section text-center'>
                    <h1>Shipping Info</h1>
                </div>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-12 col-md-7'>
                          <form className='shipping-form'>
                          <div className='row'>
                            <div className='col-12 col-md-6'>
                                <label>Full name*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label>Last name*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label>Email Id*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label>Mobile Number*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label>Pincode*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label>City*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label>State*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <label>Country*</label>
                               <div className='custom-input'>
                               <input type='text'/>
                               </div>
                            </div>
                            <div className='col-12'>
                                <label>Address*</label>
                               <div className='custom-textarea'>
                              <textarea rows={3}></textarea>
                               </div>
                            </div>
                            <div className='col-12'>
                                <button className='button-primary'>Proceed to pay</button>
                            </div>
                           </div>
                           
                          </form>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='apply-offers d-flex justify-content-between align-items-center'>
                                <span><CiPercent />Apply Offers </span>
                                <BiCaretRight />
                            </div>

                            <div className='card proceed-to-checkout proceed-to-pay' >

                                <div className='card-header price '>ORDER SUMMARY</div>
                                <div className='card-body summary'>
                                    <div className='d-flex justify-content-between'>
                                        <p>Price</p>
                                        <span>&#8377; 100</span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Discount</p>
                                        <span>&#8377; -200</span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>GST</p>
                                        <span>&#8377; 100</span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Delivery Charges</p>
                                        <span>&#8377; 0.00</span>
                                    </div>
                                    <div className='d-flex justify-content-between total-price'>
                                        <p className=' price'>Total price</p>
                                        <span className='price'>&#8377; 500</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
     <PaymentMethods />
    </Layout>
    </>
  )
}

export default Shipping