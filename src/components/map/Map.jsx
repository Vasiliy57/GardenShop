import './map.scss'

const Map = () => {
  const style = {
    width: '100%',
    height: '450px',
    border: 0
  }
  return (
    <div className='map'>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084.07779453099!2d13.370666281356089!3d52.50796974783581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2zTGlua3N0cmHDn2UgMiwgMTA3ODUgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1691080802669!5m2!1sru!2sru' style={style} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
    </div>
  )
}

export default Map
