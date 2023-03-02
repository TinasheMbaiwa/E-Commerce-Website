import {motion} from 'framer-motion'
import '../../styles/ProductCard.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import {toast } from 'react-toastify'; 

const ProductCard = ({item}) => {

    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(
            cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                imgUrl: item.imgUrl

            })
        )
        toast.success("Product addd Successfully");
    }

    return(
       <Col lg='3' md="4" className='mb-2'>
       <div className="product_item">
            <div className="product_img">
                <motion.img whileHover={{scale:0.9}} alt='product' src={item.imgUrl}></motion.img>
            </div>
            <div className='p-2 product_info'>
            <h3 className="product_name"><Link to={`/Shop/${item.id}`}>{item.productName}</Link></h3>
            <span >{item.category}</span>
            </div>
            <div className="product_card_bottom d-flex align-item-center justify-content-between p-2">
                <span className='price'>${item.price}</span>
                <motion.span whileTap={{scale:1.2}} onClick={addToCart}><i class="ri-add-line"></i></motion.span>
            </div>
       </div></Col>
    )
}
export default ProductCard