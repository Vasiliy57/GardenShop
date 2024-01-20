import Banner from '../../components/banner/Banner'
import BannerSale from '../../components/bannerSale/BannerSale'
import DiscountedItems from '../../components/discountedItems/DiscountedItems'
import RandomCategories from '../../components/randomCategories/RandomCategories'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <RandomCategories />
      <BannerSale />
      <DiscountedItems />
    </div>
  )
}

export default Home
