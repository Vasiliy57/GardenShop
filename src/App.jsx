import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/header/Header'
import Products from './pages/products/Products'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Categories from './pages/categories/Categories'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import CustomNotification from './components/customNotification/CustomNotification'
import NotFound from './pages/notFound/NotFound'
import './app.scss'

function App() {
  const { visible, message } = useSelector(state => state.customNotification)
  return (
    <div className='app'>
      {visible && <CustomNotification message={message} />}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products/' element={<Products />} />
        <Route path='sales/' element={<Products />} />
        <Route path='categories/*' element={<Categories />} />
        <Route path='categories/:categoryId' element={<Products />} />
        <Route path='product/:productId' element={<Product />} />
        <Route path='cart/' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
