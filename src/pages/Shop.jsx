import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSelection from '../components/UI/commonSelection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'




const Shop = () => {

  const [productsData, setProductsData] = useState(products);

  const handleFilter= e =>{

    const filterValue = e.target.value;
    if(filterValue ==='covers' ){
      const filteredProducts = products.filter(item=>item.category ==='covers')

      setProductsData(filteredProducts);
    }
    if(filterValue ==='oil' ){
      const filteredProducts = products.filter(item=>item.category ==='oil')

      setProductsData(filteredProducts);
    }
    if(filterValue ==='mats' ){
      const filteredProducts = products.filter(item=>item.category ==='mats')

      setProductsData(filteredProducts);
    }
    if(filterValue ==='best sales' ){
      const filteredProducts = products.filter(item=>item.category ==='best sales')

      setProductsData(filteredProducts);
    }

  }

  const handleSearch = e =>{
    const searchValue = e.target.value;

   const searchedProducts = products.filter(item => item.productName.toLocaleLowerCase()
   .includes(searchValue.toLocaleLowerCase()));

   setProductsData(searchedProducts)
  }
  return(
  <Helmet title="Shop">
  <CommonSelection title='Products'/>

  <section>
    <Container>
      <Row>
        <Col lg ='3' md ='6'>
          <div className="filter_widget">
            <select  onChange={handleFilter}>
              <option >Filterby Category</option>
              <option value="covers">Covers</option>
              <option value="mats">Mats</option>
              <option value="oil">Oil</option>
              <option value="best sales"> Best Sales</option>
            </select>

          </div>
        </Col>
        <Col lg ='3' md ='6' className='text-end'>
        <div className="filter_widget">
            <select >
              <option >Filterby Category</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>

          </div>
        </Col>
        <Col lg ='6' md ='12'>

          <div className="search_box">
            <input type='text' className='' placeholder="Search ....." onChange={handleSearch}></input>
            <span><i class="ri-search-line"></i></span>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  <section className='pt-0'>
    <Container>
      <Row>
        {
          productsData.length === 0? <h1 className='text-center fs-4'>No products Found</h1>: <ProductsList data={productsData}></ProductsList>
        }
      </Row>
    </Container>
  </section>
 </Helmet>
 ) 
  
}

export default Shop