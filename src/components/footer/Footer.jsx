import Map from '../map/Map'
import iconInstagram from './icons/icon-instagram.svg'
import iconWatsApp from './icons/icon-whatsapp.svg'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__row'>
          <div className='footer__contact' id={'contact'}>
            <h3 className='footer__title'>Contact</h3>
            <div className='footer__contact-number'>+49 999 999 99 99</div>
            <div className='footer__contact-socials'>
              <a href='#' className='footer__contact-social-item'>
                <div className='footer__contact-social-item-icon'>
                  <img src={iconInstagram} alt='icon-instagram' />
                </div>
                <div className='footer__contact-social-item-icon-name'>Instagram</div>
              </a>
              <a href='#' className='footer__contact-social-item'>
                <div className='footer__contact-social-item-icon'>
                  <img src={iconWatsApp} alt='icon-watsApp' />
                </div>
                <div className='footer__contact-social-item-icon-name'>WhatsApp</div>
              </a>
            </div>
          </div>
          <div className='footer__address'>
            <h3 className='footer__title'>Address</h3>
            <div className='footer__address-location'>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</div>
            <div className='footer__working-hours'>Working Hours:<br /> <span>24 hours a day</span> </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  )
}
export default Footer
