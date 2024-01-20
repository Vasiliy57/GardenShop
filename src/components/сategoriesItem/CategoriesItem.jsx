import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { URL_SERVER } from '../../constants/constants'
import { fetchGetProductsByCategory } from '../../requests/requests'
import './categories-item.scss'

const CategoriesItem = ({ id, title, image }) => {
  const dispatch = useDispatch()
  const handlerClick = () => {
    dispatch(fetchGetProductsByCategory(id))
  }
  return (
    <Link className='categories-item' onClick={handlerClick} to={`/categories/${id}`} >
      <div className='categories-item__img'>
        <img src={URL_SERVER + image} alt='images' />
      </div>
      <span className='categories-item__name'>{title}</span>
    </Link>
  )
}

export default CategoriesItem

