import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllProductsCart, updateTotalAmount, updateTotalPrice } from '../../store/reducers/cartReducer'
import CartForm from '../../components/cartForm/CartForm'
import CartItem from '../../components/cartItem/CartItem'
import imageEmptyCart from './empty-cart.png'
import './cart.scss'

const Cart = () => {
  const cartProducts = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateTotalPrice)
    dispatch(updateTotalAmount)
  }, [cartProducts])

  const handlerBntClearCart = () => {
    dispatch(deleteAllProductsCart)
  }
  return (
    <div className='cart'>
      <div className='container'>
        <h3 className='cart__title'>Shopping cart</h3>
        <div className='cart__row'>
          {cartProducts.length === 0
            ? (<div className='cart__img-empty-cart'>
              <img src={imageEmptyCart} alt='empty-cart' />
            </div>)
            : (<div className='cart__items'>
              {cartProducts.map((product) => {
                return <CartItem product={product} key={product.id} />
              })}
              <button className='cart__btn-clear-cart' onClick={handlerBntClearCart}>Clear cart</button>
            </div>
            )
          }
          <CartForm />
        </div>
      </div>
    </div>
  )
}

export default Cart
