import React from 'react'
import Skeleton from 'react-loading-skeleton';


const SkeletonCard = ({cards}) => {
  return (
    Array(cards).fill(0).map(()=>{
        return(
            <div className='col-12 col-md-6 col-lg-3' > 
            <Skeleton className='product-image'  />
           
          </div>
        )
    })
   
  )
}

export default SkeletonCard