import React from 'react'
import {BiUpArrowCircle} from 'react-icons/bi'
const BackToTop = () => {
    const backTop=()=>{
        window.scrollTo({top:0})
    }

  return (
    <div onClick={backTop}>
        <span className='backTop d-flex justify-content-end'>
            <BiUpArrowCircle/>
        </span>
    </div>
  )
}

export default BackToTop