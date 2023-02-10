import React from 'react'
import event from '../assets/images/community-event.png'

const UpcomingEvents = ({events}) => {
  return (
    <>
    {
        Array(events).fill(0).map((e,i)=>{
            return(
                <div className='event'>
                <div className='row m-0'>
                  <div className='col-12 col-md-2'>
                    <div className='date-time'>
                    <span className='month'>FEB</span>
                   <h2 className='date'>27</h2>
                   <span className='day'>Sat</span>
                    </div>
                   
                  </div>
                  <div className='col-12 col-md-7'>
                    <div className='event-details '>
                      <p className='time'>09:00</p>
                      <h5>Online earning platform</h5>
                      <p>lorem ipsum lorme ipsum orem ipmsu lorem ipsum lorme ipsum orem ipmsu</p>
                      <a target='_blank' href="www.facebook.com">Join us live on Instagram</a>
                    </div>
      
                  </div>
                  <div className='col-12 col-md-3'>
                    <div className='event-image'>
                      <img src={event} alt="event"/>
                    </div>
                  </div>
                </div>
              </div>
            )
        })
    }

    </>
  )
}

export default UpcomingEvents