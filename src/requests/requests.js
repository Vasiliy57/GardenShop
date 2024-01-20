import { URL_SERVER } from '../constants/constants'
import { getCategories, isLoadingCategories } from '../store/reducers/categoriesReducer'
import { getProducts, isLoadingProducts } from '../store/reducers/productsReducer'
import { getProduct, isLoadingProduct } from '../store/reducers/productReducer'
import { showCustomNotification } from '../store/reducers/customNotificationReducer'

const categoriesUrl = URL_SERVER + '/categories/all'
const categoriesById = URL_SERVER + '/categories/'
const productsUrlAll = URL_SERVER + '/products/all'
const productUrl = URL_SERVER + '/products/'
const urlSendOrder = URL_SERVER + '/order/send'
const urlSendCoupon = URL_SERVER + '/sale/send'

export const fetchGetCategories = () => {
  return function (dispatch) {
    dispatch(isLoadingCategories(true))
    fetch(categoriesUrl)
      .then(response => response.json())
      .then(data => dispatch(getCategories(data)))
      .then(() => dispatch(isLoadingCategories(false)))
  }
}

export const fetchGetProducts = () => {
  return function (dispatch) {
    dispatch(isLoadingProducts(true))
    fetch(productsUrlAll)
      .then(response => response.json())
      .then(data => {
        const objData = {
          data,
          category: 'all'
        }
        return dispatch(getProducts(objData)
        )
      })
      .then(() => dispatch(isLoadingProducts(false)))
  }
}

export const fetchGetProductsByCategory = (categoryId) => {
  return function (dispatch) {
    dispatch(isLoadingProducts(true))
    fetch(categoriesById + categoryId)
      .then(response => response.json())
      .then(data => {
        const objData = {
          data: data.data,
          category: data.category
        }
        return dispatch(getProducts(objData)
        )
      })
      .then(() => dispatch(isLoadingProducts(false)))
  }
}

export const fetchGetProduct = (productId) => {
  return function (dispatch) {
    dispatch(isLoadingProduct(true))
    fetch(productUrl + productId)
      .then(response => response.json())
      .then(data => dispatch(getProduct(data[0])))
      .then(() => dispatch(isLoadingProduct(false)))
  }
}

export const sendAnOrder = (data) => {
  return function (dispatch) {

    fetch(urlSendOrder, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => {
        dispatch(showCustomNotification('The order has been successfully sent!'))
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(showCustomNotification('Sorry something went wrong!'))
      })
  }
}

export const sendCouponDiscount = (data) => {
  return function (dispatch) {

    fetch(urlSendCoupon, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => {
        dispatch(showCustomNotification('The coupon request has been successfully sent!'))
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(showCustomNotification('Sorry something went wrong!'))
      })
  }
}