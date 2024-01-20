import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useSelector } from 'react-redux'
import './menu.scss'

const Menu = () => {
  const cartProducts = useSelector(state => state.cart.cart)
  const quantityProducts = cartProducts.length > 0 ? cartProducts.reduce((sum, product) => sum + product.count, 0) : 0
  const [burgerMenu, setBurgerMenu] = useState(false)

  const handlerBtnBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
  }
  const closeBurgerMenu = () => {
    setBurgerMenu(false)
  }

  return (
    <div className={`menu ${burgerMenu && 'open'}`}>
      <div className='menu__btn-burger' onClick={handlerBtnBurgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className='menu__list'>
        <li className='menu__item' onClick={closeBurgerMenu}><Link to='/categories' className='menu__item-link'>Categories</Link></li>
        <li className='menu__item' onClick={closeBurgerMenu}><HashLink to='/#coupon' className='menu__item-link'>Coupon</HashLink></li>
        <li className='menu__item' onClick={closeBurgerMenu}><Link to='/sales' className='menu__item-link'>Sales</Link></li>
        <li className='menu__item' onClick={closeBurgerMenu}><HashLink to='/#contact' className='menu__item-link'>Contact</HashLink></li>
        <li className='menu__item' onClick={closeBurgerMenu}><Link to='/cart' className='menu__item-link  menu__item-link--cart'>
          {cartProducts.length > 0 ? <div className='menu__quantity-products'>{quantityProducts}</div> : null}
        </Link>
        </li>
      </ul>
    </div>
  )
}
export default Menu
