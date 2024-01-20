const defaultState = {
  product: {},
  isLoadingProduct: false,
}

const GET_PRODUCT = 'GET_PRODUCT'
const IS_LOADING_PRODUCT = 'IS_LOADING_PRODUCT'

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case IS_LOADING_PRODUCT:
      return {
        ...state,
        isLoadingProduct: action.payload
      }
    default:
      return state
  }
}

export const getProduct = (payload) => {
  return { type: GET_PRODUCT, payload }
}
export const isLoadingProduct = (payload) => {
  return { type: IS_LOADING_PRODUCT, payload }
}