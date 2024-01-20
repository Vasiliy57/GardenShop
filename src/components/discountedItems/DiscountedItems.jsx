import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../loader/Loader'
import ProductItem from '../productItem/ProductItem'
import { fetchGetProducts } from '../../requests/requests'
import './discounted-items.scss'

const DiscountedItems = () => {

  const { products, isLoadingProducts } = useSelector(state => state.products)
  const randomProducts = products
    .filter(product => product.discont_price)
    .sort(() => Math.random() - 0.5).slice(0, 4)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGetProducts())
  }, [])

  return (
    <div className='discounted-items' id='sale'>
      <div className='container'>
        <h2 className='discounted-items__title'>Sale</h2>
        {isLoadingProducts
          ? <Loader />
          : <div className='discounted-items__row'>
            {randomProducts.map(product => {
              return <ProductItem product={product} key={product.id} />
            })}
          </div>
        }
      </div>
    </div>
  )
};

export default DiscountedItems
