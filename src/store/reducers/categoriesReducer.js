const defaultState = {
  categories: [],
  isLoadingCategories: false,
}
const GET_CATEGORIES = 'GET_CATEGORIES'
const IS_LOADING_CATEGORIES = 'IS_LOADING_CATEGORIES'

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case IS_LOADING_CATEGORIES:
      return {
        ...state,
        isLoadingCategories: action.payload
      }
    default:
      return state
  }
}

export const getCategories = (payload) => {
  return { type: GET_CATEGORIES, payload }
}

export const isLoadingCategories = (payload) => {
  return { type: IS_LOADING_CATEGORIES, payload }
}

