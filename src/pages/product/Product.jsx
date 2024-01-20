import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { URL_SERVER } from '../../constants/constants'
import { addProductCart } from '../../store/reducers/cartReducer'
import { fetchGetProduct } from '../../requests/requests'
import Loader from '../../components/loader/Loader'
import './product.scss'

const Product = () => {
  const { productId } = useParams()
  const { product, isLoadingProduct } = useSelector(state => state.product)
  const { id, description, price, discont_price: discountPrice, title, image } = product

  const dispatch = useDispatch()
  const productsCart = useSelector(state => state.cart.cart)

  const discount = discountPrice && Math.floor(((price - discountPrice) / price) * 100)

  const productCart = productsCart.length > 0 ? productsCart.find(product => product.id === id) : 0

  const handlerBtn = () => {
    dispatch(addProductCart(product))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!(id >= 0)) {
      dispatch(fetchGetProduct(productId))
    }
  }, [])

  return (
    <div className='product'>
      <div className='container'>
        {isLoadingProduct
          ? <Loader />
          : <>
            <div className='product__title'>{title}</div>
            <div className='product__row'>
              <div className='product__img'>
                <img src={URL_SERVER + image} alt={title} />
              </div>
              <div className='product__info'>
                <div className='product__price'>
                  <div className='product__price-current'>{discountPrice || price}<span>$</span></div>
                  {discountPrice && <div className='product__price-full'>{price}$</div>}
                  {discountPrice && <div className='product__price-discount'>-{discount} <span>%</span> </div>}
                </div>
                <button className='product__to-cart' onClick={handlerBtn}>
                  To cart {productCart ? <span className='product__count'>{productCart.count}</span> : ''}
                </button>
                <div className='product__description'>
                  <div className='product__description-title'>Description</div>
                  {description}
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Product
