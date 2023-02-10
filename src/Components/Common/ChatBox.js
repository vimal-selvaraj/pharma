import React, { useState } from 'react'
import {BsChatRightQuoteFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
const ChatBox = () => {
   const[isClose,setIsClose]= useState(true)
  return (
    <>
        <div className='chat-icon-wrapper'>
            <span className={isClose?'chat':'chat open'} onClick={()=>{setIsClose(!isClose)}}>{isClose?<BsChatRightQuoteFill/>:<AiFillCloseCircle/>}</span>
            <div className= {isClose?'chat-hidden-content':'chat-hidden-content open'}>
               
                <div className='subscription'>
                   <h5>Subscribe to newsletter</h5>
                   <p>Be the first to hear about new collections</p>
                  <div className='custom-input-field d-flex w-100'>
                    <input placeholder='Enter Your Email Address'/>
                  </div>
                  <button type='submit' className='button-primary w-100'>Sign Up</button>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default ChatBox