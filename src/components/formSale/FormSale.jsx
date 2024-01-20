import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendCouponDiscount } from '../../requests/requests'
import './form-sale.scss'

const FormSale = () => {
  const [telephoneNumber, setTelephoneNumber] = useState('')
  const dispatch = useDispatch()
  const handlerInput = ({ target }) => {
    if (/[0-9]/.test(Number(target.value)) && target.value.length < 12) {
      setTelephoneNumber(target.value)
    }
  }
  const handlerBtn = (e) => {
    e.preventDefault()
    if (telephoneNumber.length === 11) {
      dispatch(sendCouponDiscount({ userNumber: telephoneNumber }))
      setTelephoneNumber('')
    }
  }
  return (
    <form className='form-sale'>
      <input className='form-sale__input' type='number' placeholder='+49' onChange={handlerInput} value={telephoneNumber} />
      <button className='form-sale__btn' type='submit' onClick={handlerBtn}>Get a discount</button>
    </form>
  )
}

export default FormSale
