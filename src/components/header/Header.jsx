import { Link } from 'react-router-dom'
import Menu from '../menu/Menu'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__left'>
            <Link to='/' className='header__logo-img'></Link>
            <Link to='/products' className='header__btn'>Catalog</Link>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  )
}
export default Header
