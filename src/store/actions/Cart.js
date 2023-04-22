import { INCREASE_PRODUCT, PLACE_ORDER, UPDATE_PRODUCT_COUNT } from "store/type"

export const increaseProduct = (id) => dispatch => {
  dispatch({ type: INCREASE_PRODUCT, payload: id })
}

export const updateProductCount = (id, count) => dispatch => {
  dispatch({ type: UPDATE_PRODUCT_COUNT, payload: { id, count } })
}

export const placeOrder = () => dispatch => {
  dispatch({ type: PLACE_ORDER })
}