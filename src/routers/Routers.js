import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';


import {Routes, Route, Navigate} from 'react-router-dom'
import React from 'react'


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate  to = 'Home' />}></Route>
      <Route path = 'Home' element={<Home/>}></Route>
      <Route path = 'Shop' element={<Shop/>}></Route>
      <Route path = 'Login' element={<Login/>}></Route>
      <Route path = 'Cart' element={<Cart/>}></Route>
      <Route path = 'Checkout' element={<Checkout/>}></Route>
      <Route path = 'Signup' element={<Signup/>}></Route>
      <Route path = 'Shop/:id' element={<ProductDetails/>}></Route>
    
    </Routes>
  )
}

export default Routers