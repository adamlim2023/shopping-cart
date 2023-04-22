import { INCREASE_PRODUCT, PLACE_ORDER, UPDATE_PRODUCT_COUNT } from '../type';

const initialState = {
  currOrders: [],
  prevOrders: [],
  count: 0
};

const CartReducer = (state = initialState, action) => {
  let index = -1;
  const { count, currOrders } = state;
  switch (action.type) {
    case INCREASE_PRODUCT:
      currOrders.map((item, i) => {
        if (item.id === action.payload) index = i;
      });
      if (index > -1) {
        currOrders[index].count = currOrders[index].count + 1;
      } else {
        currOrders.push({ id: action.payload, count: 1 })
      }
      return { ...state, currOrders, count: count + 1 };
    case PLACE_ORDER:
      return { ...state, currOrders: [], prevOrders: currOrders, count: 0 }
    case UPDATE_PRODUCT_COUNT:
      currOrders.map((item, i) => {
        if (item.id === action.payload.id) index = i;
      });
      const diffCount = action.payload.count - currOrders[index].count;
      currOrders[index].count = action.payload.count;
      return { ...state, currOrders, count: count + diffCount }
    default:
      return state;
  }
};

export default CartReducer;
