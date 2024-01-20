import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { sendAnOrder } from '../../requests/requests'
import { deleteAllProductsCart } from '../../store/reducers/cartReducer'
import './cart-form.scss'

const CartForm = () => {
  const cart = useSelector(state => state.cart)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const dispatch = useDispatch()
  const [telephoneNumber, setTelephoneNumber] = useState('')

  const handlerTelephoneNumber = ({ target }) => {
    if (/[0-9]/.test(Number(target.value)) && target.value.length < 12) {
      setTelephoneNumber(target.value)
    }
  }
  const handlerBtn = (e) => {
    e.preventDefault()
    if (telephoneNumber.length === 11) {
      dispatch(sendAnOrder({ ...cart, userNumber: telephoneNumber }))
      setTelephoneNumber('')
      dispatch(deleteAllProductsCart)
    }
  }
  return (
    <form className='cart-form'>
      <h4 className='cart-form__title'>Order details</h4>
      <div className='cart-form__row'>
        <div className='cart-form__total'>Total</div>
        <div className='cart-form__total-price'>{totalPrice}<span>$</span></div>
      </div>
      <input
        type='number'
        className='cart-form__input'
        placeholder='Phone number'
        value={telephoneNumber}
        onChange={handlerTelephoneNumber}
      />
      <button type='submit' className='cart-form__btn' onClick={handlerBtn}>Order</button>
    </form>
  )
}

export default CartForm
