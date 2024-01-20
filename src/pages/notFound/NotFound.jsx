import img from './not-found-img.jpg'
import './not-found.scss'

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='container'>
        <div className='not-found__img'>
          <img src={img} alt='not found 404' />
        </div>
      </div>
    </div>
  )
}

export default NotFound
