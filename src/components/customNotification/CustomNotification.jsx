import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCustomNotification } from '../../store/reducers/customNotificationReducer'
import './custom-notification.scss'

const CustomNotification = ({ message }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(removeCustomNotification)
      console.log(timerId)
    }, 5000)
  }, [])

  return (
    <div className='custom-notification'>{message}</div>
  )
}
export default CustomNotification
