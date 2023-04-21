import { ADD_PRODUCT } from "store/type"

export const addProduct = (id) => dispatch => {
  dispatch({ type: ADD_PRODUCT, payload: id })
}