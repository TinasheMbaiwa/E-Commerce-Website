import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
        <Container>
          <Row>
            <Col lg='4' className='mb-4' md='3'>
            <div className="logo">
               
                <div>
                  <h1 className='text-white'>Shenamu Auto Parts & Styling</h1>
                 
                </div>
              </div>
              <p className="footer_text mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt iusto odit vel molestias rerum distinctio quisquam unde delectus libero?
                </p>
            </Col>
            <Col lg='3' className='mb-4' md='3'>
              <div className="footer_quick_links">
                <h4 className="quick_links_tittle">Top Categories</h4>
                  <ListGroup>
                    <ListGroupItem className='ps-0 border-0 '>
                      <Link to='#'>Lights</Link>
                    </ListGroupItem >
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>Bumpers & Grills</Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>Oils & Lubricants</Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>Airflow Systems</Link>
                    </ListGroupItem>
                  </ListGroup>
              
              </div>
            </Col>
            <Col lg='2' className='mb-4' md='3'>
            <div className="footer_quick_links">
                <h4 className="quick_links_tittle">Usefull Links</h4>
                  <ListGroup>
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to='/shop'>Shop</Link>
                    </ListGroupItem >
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to='/cart'>Cart</Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to='/login'>Login</Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to='#'>Privacy Policy</Link>
                    </ListGroupItem>
                  </ListGroup>
              
              </div>
            </Col>
            <Col lg='3' md='4'>
            <div className="footer_quick_links">
                <h4 className="quick_links_tittle">Contacts</h4>
                  <ListGroup className='footer_contact'>
                    <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                      <span><i class="ri-map-pin-line"></i></span>
                      <p>Unit 44 Lake Grace, 3 Marguerite Ave, Primrose, Gauteng</p>
                    </ListGroupItem >
                    <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                    <span><i class="ri-phone-fill"></i></span>
                      <p>+278 47069733</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                    <span><i class="ri-mail-line"></i></span>
                      <p>sales@shenamuautopartsandstyling.com</p>
                    </ListGroupItem>
                  </ListGroup>
              
              </div>
            </Col>
            <Col lg='12'>
              <p className="footer_copyright">Copyright @ {year} developed
              by Kloud Kings Pvt Ltd. All rights reserved.</p>
            </Col>
          </Row>
        </Container>

    </footer>
  )
}

export default Footer