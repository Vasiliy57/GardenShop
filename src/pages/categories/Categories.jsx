import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AllCategories from '../../components/allCategories/AllCategories'
import Loader from '../../components/loader/Loader'
import './categories.scss'

const Categories = () => {
  const isLoadingCategories = useSelector(state => state.categories.isLoadingCategories)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='categories'>
      <div className='container'>
        <h3 className='categories__title'>
          Categories
        </h3>
        {
          isLoadingCategories ? <Loader /> : <AllCategories />
        }
      </div>
    </div>
  )
}

export default Categories
