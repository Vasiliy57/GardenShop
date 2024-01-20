import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesItem from '../сategoriesItem/CategoriesItem'
import { fetchGetCategories } from '../../requests/requests'
import './all-categories.scss'

const AllCategories = () => {
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchGetCategories())
    }
  }, [])
  return (
    <div className='all-categories'>
      {categories.map(category => {
        return <CategoriesItem {...category} key={category.id} />
      })}
    </div>
  )
}

export default AllCategories
