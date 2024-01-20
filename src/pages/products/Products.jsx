import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchGetProducts } from '../../requests/requests'
import ProductItem from '../../components/productItem/ProductItem'
import FilterProducts from '../../components/filterProducts/FilterProducts'
import Loader from '../../components/loader/Loader'
import './products.scss'

const Products = () => {
  const { filterProducts: products, isLoadingProducts } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products.length === 0) {
      dispatch(fetchGetProducts())
    }
  }, [])

  return (
    <div className='products'>
      <div className='container'>
        <h3 className='products__title'>Tools and equipment</h3>
        <FilterProducts />
        {isLoadingProducts
          ? <Loader />
          : <div className='products__row'>
            {products.map(product => {
              return <ProductItem product={product} key={product.id} />
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default Products
