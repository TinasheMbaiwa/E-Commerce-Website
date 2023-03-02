
import React, {useRef, useEFfect} from 'react'
import './Header.css'
import { Container, Row } from 'reactstrap'
import Logo from '../../assets/images/eco-logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'



const nav_links = [

  {
    path:'Home',
    display:'Home'
  },
  {
    path:'Shop',
    display:'Shop'
  },
  {
    path:'Cart',
    display:'Cart'
  },
 



]



const Header = () => {

  const totalQuantity = useSelector(state=> state.cart.totalQuantity)
  const navigate = useNavigate()

  //Sticky Haeder not working

/*

  const headerRef = useRef(null)
  const menuRef = useRef()

  const headerRefFunc = () => {

      window.addEventListener('scroll',() =>{

          if(document.body.scrollTop > 80 || document.documentElement.scrollTop
            > 80){
              headerRef.current.classList.add('sticky_header');
            }else{
              headerRef.current.classList.remove('sticky_header');
            }
      })

  }
  const menuToggle = () => menuRef.current.classList.toggle('active_menu')
 

  */
  
  const navigateToCart = () =>{
      navigate('/cart')
  }

  return (
    <header className='header'/* ref={headerRef}*/>
        <Container>
          <Row>
            <div className="nav_wrapper">
              <div className="logo">
                <img alt="logo" src={Logo} ></img>
                <div>   
                  <h1>Shenamu Auto Parts</h1>
                 
                </div>
              </div>
              <div className="navigation"/* ref={menuRef} onClick={menuToggle}*/>
                <ul className="menu">
                  {nav_links.map((item,index)=>(<li className="nav_item" key={index}>
                        <NavLink to={item.path} className={(navClass)=>navClass.isActive?'nav_active':''}>{item.display}</NavLink>
                 	 </li>))}
                </ul>
              </div>
              <div className="nav_icons">
                <span  className='fav_icon'><i class="ri-heart-line"></i> <span className="badge">1</span></span>
                <span onClick ={navigateToCart}className='cart_icon'><i class="ri-shopping-bag-line"></i><span className="badge">{totalQuantity}</span></span>
                <span className=''><motion.img whileTap={{scale:1.2}} alt="userIcon" src={userIcon}></motion.img></span>
                <div className="mobile_menu">
                <span /* onClick={menuToggle}*/><i class="ri-menu-line"></i></span>
              </div>
              </div>
              
            </div>
          </Row>
        </Container>
    </header>
  )
}

export default Header