import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { URL_SERVER } from '../../constants/constants'
import { fetchGetProduct } from '../../requests/requests'
import { addProductCart } from '../../store/reducers/cartReducer'
import './product-item.scss'

const ProductItem = ({ product }) => {
  const { id, image, price, discont_price: discountPrice, title } = product

  const dispatch = useDispatch()
  const discount = discountPrice && Math.floor(((price - discountPrice) / price) * 100)
  const productsCart = useSelector(state => state.cart.cart)

  const productCart = productsCart.length > 0 ? productsCart.find(product => product.id === id) : 0

  const handlerLink = () => {
    dispatch(fetchGetProduct(id))
  }
  const handlerBtn = () => {
    dispatch(addProductCart(product))
  }

  return (
    <div className='product-item'>
      {productCart ? <div className='product-item__count'>{productCart.count}</div> : <></>}
      <div className="product-item__img">
        <button className="product-item__btn" onClick={handlerBtn}>Add to Cart</button>
        <img src={URL_SERVER + image} alt="product" />
      </div>
      <Link to={`/product/${id}`} onClick={handlerLink}>
        <div className="product-item__row">
          <div className="product-item__price">{discountPrice || price}$</div>
          {discountPrice && <div className="product-item__full-price">{price}$</div>}
          {discountPrice && <div className="product-item__discount">-{discount}%</div>}
        </div>
        <div className="product-item__title">{title}</div>
      </Link>
    </div>
  )
}

export default ProductItem
