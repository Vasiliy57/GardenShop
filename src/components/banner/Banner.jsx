import { HashLink } from 'react-router-hash-link'
import grass from './grass.png'
import './banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner__row'>
          <div className='banner__box'>
            <h1 className='banner__title'>Sale</h1>
            <h2 className='banner__subtitle'> New season</h2>
            <div className='banner__buttons'>
              <HashLink to={'#sale'} className='banner__btn banner__btn--sale'>Sale</HashLink>
              <button className='banner__btn'>Learn more</button>
            </div>
          </div>
          <div className='banner__img'>
            <img src={grass} alt='green grass' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
