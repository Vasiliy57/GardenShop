import { customFilter } from "../../utils/customFilter"

const defaultState = {
  products: [],
  currentCategory: 'all',
  filterSettings: {
    priceFrom: '',
    priceTo: '',
    discountedItems: false,
    sortedBy: 'default'
  },
  filterProducts: [],
  isLoadingProducts: false,
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const FILTER_PRODUCTS_BY_SETTINGS = 'FILTER_PRODUCTS_BY_SETTINGS'
const FILTER_PRODUCTS_BY_PRICE_FROM = 'FILTER_PRODUCTS_BY_PRICE_FROM'
const FILTER_PRODUCTS_BY_PRICE_TO = 'FILTER_PRODUCTS_BY_PRICE_TO'
const FILTER_PRODUCTS_BY_DISCOUNT = 'FILTER_PRODUCTS_BY_DISCOUNT'
const SORTED_PRODUCTS_BY = 'SORTED_PRODUCTS_BY'
const IS_LOADING_PRODUCTS = 'IS_LOADING_PRODUCTS'

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        currentCategory: action.payload.category,
        filterProducts: customFilter(action.payload.data, state.filterSettings)
      }
    case FILTER_PRODUCTS_BY_SETTINGS:
      return {
        ...state,
        filterProducts: customFilter(state.products, state.filterSettings),
      }
    case FILTER_PRODUCTS_BY_PRICE_FROM:
      return {
        ...state,
        filterSettings: { ...state.filterSettings, priceFrom: action.payload }
      }
    case FILTER_PRODUCTS_BY_PRICE_TO:
      return {
        ...state,
        filterSettings: { ...state.filterSettings, priceTo: action.payload }
      }
    case FILTER_PRODUCTS_BY_DISCOUNT:
      return {
        ...state,
        filterSettings: { ...state.filterSettings, discountedItems: action.payload }
      }
    case SORTED_PRODUCTS_BY:
      return {
        ...state,
        filterSettings: { ...state.filterSettings, sortedBy: action.payload }
      }
    case IS_LOADING_PRODUCTS:
      return {
        ...state,
        isLoadingProducts: action.payload
      }
    default:
      return state
  }
}

export const getProducts = (payload) => {
  return { type: GET_PRODUCTS, payload }
}
export const filterProductsByFrom = (payload) => {
  return { type: FILTER_PRODUCTS_BY_PRICE_FROM, payload }
}
export const filterProductsByTo = (payload) => {
  return { type: FILTER_PRODUCTS_BY_PRICE_TO, payload }
}
export const filterProductsByDiscount = (payload) => {
  return { type: FILTER_PRODUCTS_BY_DISCOUNT, payload }
}
export const sortedProductsBy = (payload) => {
  return { type: SORTED_PRODUCTS_BY, payload }
}
export const isLoadingProducts = (payload) => {
  return { type: IS_LOADING_PRODUCTS, payload }
}
export const filterProductsBySettings = { type: FILTER_PRODUCTS_BY_SETTINGS }
