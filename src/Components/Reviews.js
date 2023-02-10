import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { AiFillStar} from 'react-icons/ai'
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs'
const Reviews = () => {
  return (
    <>
         <section className='reviews container'>
                <h2>Reviews <span>(15)</span></h2>
                <div className='row m-0'>
                    <div className='col-2 p-0'>
                        <div className='ratings'>
                           <div className='existing-rating d-flex'>
                            <div className='me-2'><span><AiFillStar/></span></div>
                            <div>
                                <h6><span>4.5</span> Ratings</h6>
                                <p>Based on <span>15</span> Reviews</p>
                            </div>
                           </div>
                           <div className='rating-progress'>
                            <div className='d-flex align-items-center'>
                                <span>5</span>
                                    <ProgressBar now={60}/>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span>4</span>
                                <ProgressBar now={20}/>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span>3</span>
                                <ProgressBar now={50}/>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span>2</span>
                                <ProgressBar now={10}/>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span>1</span>
                                <ProgressBar now={0}/>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div className='col-10'>
                        <div className='share-review'>
                            <h6>Share Your Review</h6>
                            <div className='row m-0'>
                                <div className='col-12 col-md-4'>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label>Name * </label>
                                        </div>
                                        <div className='col-8'>
                                            <input type='text'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label>Mail Id * </label>
                                        </div>
                                        <div className='col-8'>
                                            <input type='text'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label>Mobile * </label>
                                        </div>
                                        <div className='col-8'>
                                            <input type='text'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                <div className='row'>
                                        <div className='col-3'>
                                            <label>Rating * </label>
                                        </div>
                                        <div className='col-9'>
                                        <div className='stars me-2'>
                                        <span><BsStarFill/></span>
                                        <span><BsStarFill/></span>
                                        <span><BsStarFill/></span>
                                        <span><BsStarHalf/></span>
                                        <span><BsStar/></span>
                                    </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <label>Review * </label>
                                        </div>
                                        <div className='col-9'>
                                        <div className='custom-textarea'>
                                            <textarea cols='3' rows='3'></textarea>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-2'>
                                    <div className='submit-btn'>
                                        <button className='button-primary'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Reviews