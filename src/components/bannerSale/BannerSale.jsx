import FormSale from '../formSale/FormSale'
import imgDwarf from './dwarf.png'
import './banner-sale.scss'

const BannerSale = () => {
  return (
    <div className='banner-sale' id={'coupon'}>
      <div className='container'>
        <div className='banner-sale__row'>
          <div className='banner-sale__img'>
            <img src={imgDwarf} alt='dwarf' />
          </div>
          <div className='banner-sale__content'>
            <div className='banner-sale__title'>5% off</div>
            <div className='banner-sale__subtitle'>on the first order</div>
            <FormSale />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSale
