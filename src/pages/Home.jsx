import { useState, useEffect } from 'react'


import { Col, Container, Row } from 'reactstrap'
import '../styles/home.css'
import Clock from '../components/UI/Clock'

import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/slide1.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import counterImg from "../assets/images/6.png"

const Home = () => {

  const  [trendingProducts, setTrendingProducts] =  useState([])
  const  [bestSalesProducts, setBestSalesProducts] =  useState([])
  const  [mobileProducts, setMobileProducts] =  useState([])
  const  [wirelessProducts, setWirelessProducts] =  useState([])
  const  [popularProducts, setPopularProducts] =  useState([])
  const year =new Date().getFullYear();
  useEffect(()=>{
    const filteredtrendingProducts = products.filter(item=>item.category==='trending');
    const filteredbestSalesProducts = products.filter(item=>item.category==='best sales');
    const filteredmobileProducts = products.filter(item=>item.category==='covers');
    const filteredwirelessProducts = products.filter(item=>item.category==='mats');
    const filteredpopularProducts = products.filter(item=>item.category==='oil');

    setTrendingProducts(filteredtrendingProducts);
    setBestSalesProducts(filteredbestSalesProducts);
    setMobileProducts(filteredmobileProducts);
    setWirelessProducts(filteredwirelessProducts);
    setPopularProducts(filteredpopularProducts);
  },[] );
  return (
    <Helmet title={'Home'}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                      <p className="hero_subtitle">Trending products in {year}</p>
                      <h2>Why Settle For Less When You Have The Best At Your Fingertips</h2>
                      <p>We guarantee product satisfaction, as our products are sourced from leaders in automotive part amnufacturers</p>
                      <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to="/Shop">SHOP NOW</Link></motion.button>
                </div>
              </Col>

                <Col lg='6' md='6'>
                  <div className="hero_img">
                    <img alt='hero-img' src={heroImg}></img>
                  </div>
                </Col>

            </Row>
          </Container>

        </section>
        <Services></Services>
        <section className="trending_products">
          <Container>
              <Row>
                <Col lg='12' className='text-center'>
                <h2 className="section_title" > Trending Products</h2>
                </Col>
                <ProductsList data={trendingProducts}></ProductsList>
              </Row>
          </Container>
        </section>

        <section className="best_sales">
            <Container>
            <Row className='best_sales_row'>
                <Col lg='12' className='text-center'>
                <h2 className="section_title" > Best Sales</h2>
                </Col>
                <ProductsList data={bestSalesProducts}></ProductsList>
              </Row>
            </Container>
        </section>

        <section className="timer_count">

          <Container>
            <Row>
              <Col lg='6' md='12' className='count_down_col'>
                <div className="clock_top_content">
                  <h4 className='text-white fs-6 mb-2'>Limmited Offers</h4>
                  <h3 className='text-white fs-5 mb-3'>Quality Control Arms</h3>
                </div>
                <Clock></Clock>
                <motion.button whileTap={{scale:1.2}} className='buy_btn store_btn'><Link to='/shop'>Visit Store</Link></motion.button>
              </Col>
              <Col lg='6' md='12' className="text-end counter_img">
                <img src={counterImg} alt="counterImg"></img>
              </Col>

            </Row>
          </Container>
        </section>

        <section className="new_arrivals">
          <Container>
            <Row>
            <Col lg='12' className='text-center mb-5'>
                <h2 className="section_title" >New Arrivals</h2>
                </Col>
                <ProductsList data={mobileProducts}></ProductsList>
                <ProductsList data={wirelessProducts}></ProductsList>
            </Row>
          </Container>
        </section>
        <section className="popular_category">
        <Container>
            <Row>
            <Col lg='12' className='text-center mb-5'>
                <h2 className="section_title" >Popular Products</h2>
                </Col>
                <ProductsList data={popularProducts}></ProductsList>
            </Row>
          </Container>

        </section>

    </Helmet>
  )
}

export default Home