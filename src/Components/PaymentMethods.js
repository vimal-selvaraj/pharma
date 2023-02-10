import React from 'react'
import cashOnDelivery from '../assets/images/shipping.png'
import freeDelivery from '../assets/images/free-delivery.png'
import payment from '../assets/images/payment.png'
const PaymentMethods = () => {
  return (
    <div>
          <section className='shipment-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <div className='icon'>
                                <span><img src={cashOnDelivery} alt='cash'/></span>
                            </div>
                            <div className='description'>
                                <h6>Free Shipping</h6>
                                <p>On Orders Above Rs.500</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-2'>
                            <div className='icon'>
                                <span><img src={freeDelivery} alt="free" /></span>
                            </div>
                            <div className='description'>
                                <h6>Cash on Delivery</h6>
                                <p>Available for Premium Customers</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 payment'>
                            <div className='icon'>
                                <span><img src={payment} alt="payment"/></span>
                            </div>
                            <div className='description text-start'>
                                <h6>Payment</h6>
                                <p>100% Payment Protection, Easy Return Policy</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className='description queries'>
                                <h6>Have Queries or Concerns?</h6>
                               <button className='button-secondary'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    </div>
  )
}

export default PaymentMethods