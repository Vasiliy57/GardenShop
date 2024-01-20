const defaultState = {
  message: '',
  visible: false
}

const REMOVE_CUSTOM_NOTIFICATION = 'REMOVE_CUSTOM_NOTIFICATION'
const SHOW_CUSTOM_NOTIFICATION = 'SHOW_CUSTOM_NOTIFICATION'


export const customNotificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_CUSTOM_NOTIFICATION:
      return {
        message: action.payload,
        visible: true
      }
    case REMOVE_CUSTOM_NOTIFICATION:
      return {
        message: '',
        visible: false
      }
    default:
      return state
  }
}

export const showCustomNotification = (payload) => {
  return { type: SHOW_CUSTOM_NOTIFICATION, payload }
}

export const removeCustomNotification = { type: REMOVE_CUSTOM_NOTIFICATION }