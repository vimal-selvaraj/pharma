import React from 'react'

const Partners = () => {
  const partners=[
    {
      id:1,
      name:"ABC Pharma",
      description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem "
    },
    {
      id:2,
      name:"XYZ Pharma",
      description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem sum Lorem ipsum Loremsum Lorem ipsum Lorem"
    },
    {
      id:3,
      name:"AAA Pharma",
      description:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem sum Lorem ipsum Loremsum Lorem ipsum Loremsum Lorem ipsum Loremsum Lorem ipsum Lorem"
    }

  ]
  return (
    <>
   {partners.map((e,i)=>{
        return(
            <div className='partner' key={i}>
              <h3>{e.name}</h3>
              <p>{e.description}</p>
            </div>
        )
    })}

    </>
  )
}

export default Partners