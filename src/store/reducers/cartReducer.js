
const defaultState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0
}

const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART'
const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART'
const DEC_PRODUCT_COUNT = 'DEC_PRODUCT_COUNT'
const INC_PRODUCT_COUNT = 'INC_PRODUCT_COUNT'
const DELETE_ALL_PRODUCTS_CART = 'DELETE_ALL_PRODUCTS_CART'
const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE'
const UPDATE_TOTAL_AMOUNT = 'UPDATE_TOTAL_AMOUNT'


const updateProductCount = (array, id, inc) => {
  return array.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        count: inc ? product.count + 1 : product.count - 1
      }
    }
    return product
  })
}

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      const productsUniq = state.cart.find((product) => product.id === action.payload.id)
      return {
        ...state,
        cart: productsUniq
          ? updateProductCount(state.cart, action.payload.id, true)
          : [...state.cart, { ...action.payload, count: 1 }]
      }

    case DELETE_PRODUCT_CART: {
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload)
      }
    }
    case INC_PRODUCT_COUNT:
      return {
        ...state,
        cart: updateProductCount(state.cart, action.payload, true)
      }

    case DEC_PRODUCT_COUNT:
      return {
        ...state,
        cart: updateProductCount(state.cart, action.payload)
      }
    case DELETE_ALL_PRODUCTS_CART:
      return {
        cart: [],
        totalPrice: 0,
        totalAmount: 0,
      }
    case UPDATE_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: state.cart.reduce((sum, product) => {
          return sum += product.count
        }, 0)
      }

    case UPDATE_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: (state.cart.reduce((sum, product) => {
          return sum + ((product.discont_price || product.price) * product.count)
        }, 0)).toFixed(2)
      }

    default:
      return state
  }
}

export const addProductCart = (payload) => {
  return { type: ADD_PRODUCT_CART, payload }
}

export const deleteProductCart = (payload) => {
  return { type: DELETE_PRODUCT_CART, payload }
}
export const decCountProductCart = (payload) => {
  return { type: DEC_PRODUCT_COUNT, payload }
}
export const incCountProductCart = (payload) => {
  return { type: INC_PRODUCT_COUNT, payload }
}
export const deleteAllProductsCart = { type: DELETE_ALL_PRODUCTS_CART }

export const updateTotalPrice = { type: UPDATE_TOTAL_PRICE }

export const updateTotalAmount = { type: UPDATE_TOTAL_AMOUNT }