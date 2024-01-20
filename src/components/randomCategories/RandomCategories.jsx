import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchGetCategories } from '../../requests/requests'
import CategoriesItem from '../сategoriesItem/CategoriesItem'
import Loader from '../loader/Loader'
import './randomCategories.scss'

const RandomCategories = () => {
  const { categories, isLoadingCategories } = useSelector(state => state.categories)

  const randomCategories = categories.sort(() => Math.random() - 0.5).slice(0, 4)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetCategories())
  }, [])

  return (
    <div className='random-categories'>
      <div className='container'>
        {isLoadingCategories
          ? <Loader />
          : <>
            <div className='random-categories__top'>
              <h3 className='random-categories__title'>Catalog</h3>
              <Link className='random-categories__btn' to='/categories'>All categories</Link>
            </div>
            <div className='random-categories__row'>
              {randomCategories.map(category => {
                return <CategoriesItem {...category} key={category.id} />
              })}
            </div>
          </>
        }
      </div>
    </div>
  )
}
export default RandomCategories
