import { ADD_PRODUCT } from '../type';

const initialState = {
  order: [],
  pastOrder: []
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let index = -1;
      const clonedOrder = state.order;
      clonedOrder.map((item, i) => {
        if (item.id === action.payload) index = i;
      });
      if (index > -1) {
        clonedOrder[index].count = clonedOrder[index].count + 1;
      } else {
        clonedOrder.push({ id: action.payload, count: 1 })
      }
      return { ...state, order: clonedOrder };
    default:
      return state;
  }
};

export default CartReducer;
