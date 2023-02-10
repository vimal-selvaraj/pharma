import React from 'react'
import BackToTop from './BackToTop'
import ChatBox from './ChatBox'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <>
       {props.children}
         <BackToTop/>
        <Footer/>
        <ChatBox/>
    </>
  )
}

export default Layout