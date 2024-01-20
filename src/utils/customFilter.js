import { ASCENDING_PRICE, DESCENDING_PRICE, TITLE } from '../constants/constants'

export const customFilter = (products, { priceFrom, priceTo, discountedItems, sortedBy }) => {
  priceFrom = priceFrom === '' ? 0 : priceFrom
  priceTo = priceTo === '' ? Infinity : priceTo

  let result = products.filter((product => {
    const finalPrice = product.discont_price || product.price
    return priceFrom <= finalPrice && finalPrice <= priceTo
  }))

  if (discountedItems) {
    result = result.filter(product => {
      return Boolean(product.discont_price)
    })
  }

  if (sortedBy === ASCENDING_PRICE) {
    result.sort((product, secondProduct) => {
      const firstFinalPrice = product.discont_price || product.price
      const secondFinalPrice = secondProduct.discont_price || secondProduct.price
      return firstFinalPrice - secondFinalPrice
    })
  } else if (sortedBy === DESCENDING_PRICE) {
    result.sort((product, secondProduct) => {
      const firstFinalPrice = product.discont_price || product.price
      const secondFinalPrice = secondProduct.discont_price || secondProduct.price
      return secondFinalPrice - firstFinalPrice
    })
  } else if (sortedBy === TITLE) {
    result.sort((product, secondProduct) => {
      return product.title.localeCompare(secondProduct.title)
    })
  }

  return result
}