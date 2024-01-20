import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { filterProductsByDiscount, filterProductsByFrom, filterProductsBySettings, filterProductsByTo, sortedProductsBy } from '../../store/reducers/productsReducer'
import { ASCENDING_PRICE, DEFAULT, DESCENDING_PRICE, TITLE } from '../../constants/constants'
import './filter-products.scss'

const FilterProducts = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [discountItems, setDiscountItems] = useState(() => pathname === '/sales' ? true : false)

  useEffect(() => {
    dispatch(filterProductsByDiscount(discountItems))
  }, [discountItems])

  useEffect(() => {
    dispatch(filterProductsBySettings)
  }, [])

  const handlerInputPriceFrom = (e) => {
    setPriceFrom(e.target.value)
  }
  const handlerInputPriceTo = (e) => {
    setPriceTo(e.target.value)
  }
  const handlerBntApply = () => {
    dispatch(filterProductsByFrom(priceFrom))
    dispatch(filterProductsByTo(priceTo))
    dispatch(filterProductsBySettings)
  }
  const handlerInputCheck = (e) => {
    setDiscountItems(e.target.checked)
  }
  const handlerSelectSortedBy = (e) => {
    dispatch(sortedProductsBy(e.target.value))
  }

  return (
    <div className='filter-product'>
      <div className='filter-product__price'>
        <div className='filter-product__price-name'>Price</div>
        <input type='number'
          className='filter-product__price-input'
          placeholder='from'
          value={priceFrom}
          onChange={handlerInputPriceFrom}
        />
        <input type='number'
          className='filter-product__price-input'
          placeholder='to'
          value={priceTo}
          onChange={handlerInputPriceTo}
        />
      </div>
      <div className='filter-product__discounted'>
        <div className='filter-product__discounted-name'>Discounted items</div>
        <input
          className='filter-product__discounted-check'
          type='checkbox'
          name=''
          id=''
          onChange={handlerInputCheck}
          checked={discountItems}
        />
      </div>
      <div className='filter-product__filter-by'>
        <div className='filter-product__filter-by-name'>Sorted</div>
        <select className='filter-product__filter-by-select' onChange={handlerSelectSortedBy}>
          <option value={DEFAULT}>by default</option>
          <option value={ASCENDING_PRICE}>by ascending price</option>
          <option value={DESCENDING_PRICE}>by descending price</option>
          <option value={TITLE}>by title</option>
        </select>
      </div>
      <button className='filter-product__btn-apply' onClick={handlerBntApply}>apply settings</button>
    </div>
  )
}
export default FilterProducts
