import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { URL_SERVER } from '../../constants/constants'
import { decCountProductCart, deleteProductCart, incCountProductCart } from '../../store/reducers/cartReducer'
import { fetchGetProduct } from '../../requests/requests'
import './cart-item.scss'

const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  const { id, image, price, discont_price: discountPrice, title } = product

  const handlerBtnDel = () => {
    dispatch(deleteProductCart(id))
  }
  const handlerInc = () => {
    dispatch(incCountProductCart(id))
  }
  const handlerDec = () => {
    dispatch(decCountProductCart(id))
  }
  const handlerLink = () => {
    dispatch(fetchGetProduct(id))
  }
  return (
    <div className='cart-item'>
      <Link className='cart-item__img' to={`/product/${id}`} onClick={handlerLink}>
        <img src={URL_SERVER + image} alt={title} />
      </Link>
      <div className='cart-item__column'>
        <Link className='cart-item__title' to={`/product/${id}`} onClick={handlerLink}>{title}</Link>
        <div className='cart-item__count'>
          <button disabled={product.count === 1} className='cart-item__remove' onClick={handlerDec}></button>
          {product.count}
          <button className='cart-item__add' onClick={handlerInc} ></button>
        </div>
      </div>
      <div className='cart-item__price'>
        <div className='cart-item__price-current'>{discountPrice ?? price}<span>$</span></div>
        {discountPrice && <div className='cart-item__price-full'>{price}$</div>}
      </div>
      <button className='cart-item__delete' onClick={handlerBtnDel}></button>
    </div>
  )
}

export default CartItem
