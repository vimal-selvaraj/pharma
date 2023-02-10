import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsCart4} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import { useSelector } from 'react-redux'
const Header = () => {
 const[menuToggle,setMenuToggle]=useState(false);
 const cartItems=useSelector(state=>state.cart)

    return (
        <div className='header'>
            <div className='container'>
                <div className='logo-wrapper'>
                    <img src={logo} alt="logo"/>
                     </div>
                <div className='menu-items'>
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/medicines'>Medicines</Link></li>
                        <li><Link to='/remedies'>Remedies</Link></li>
                        <li><Link to='/community'>Community</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className='profile-cart'>
                   <span className='me-2 cart-icon'>{cartItems.length>0?(<span className='badge'>{cartItems.length}</span>):null} <Link to='/cart' ><BsCart4/></Link></span>
                   <span> <FaUserCircle/></span>
                </div>
                <div className="menu-toggler">
                    <span onClick={()=>{setMenuToggle(!menuToggle)}}><GiHamburgerMenu/></span>
                </div>
            </div>
            <div className={menuToggle?"mobile-menu show":"mobile-menu"}>
                <div className='logo-wrapper'>
                    <img src={logo} alt="logo"/>
                     </div>
                <div className='mobile-menu-items'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/medicines'>Medicines</Link></li>
                        <li><Link to='/remedies'>Remedies</Link></li>
                        <li><Link to='/community'>Community</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                </div>

        </div>
    )
}

export default Header