import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/productsReducer'
import { categoriesReducer } from './reducers/categoriesReducer'
import { productReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { customNotificationReducer } from './reducers/customNotificationReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  customNotification: customNotificationReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))