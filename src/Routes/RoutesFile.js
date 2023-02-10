import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from '../Pages/About'
import Community from '../Pages/Community'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Medicines from '../Pages/Medicines';
import Remedies from '../Pages/Remedies'
import Productdetail from '../Pages/Productdetail'
import Cart from '../Pages/Cart'
import Shipping from '../Pages/Shipping'


const RoutesFile = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path='/medicines' element={<Medicines/>}/>
            <Route path='/productDetails'>
              <Route path=':id' element={<Productdetail/>}/>
            </Route>
            <Route path='/remedies' element={<Remedies/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/shipping' element={<Shipping/>}/>
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default RoutesFile