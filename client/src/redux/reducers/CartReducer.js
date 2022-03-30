import { ADDTOCART } from "../types/cartTypes";

const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTOCART:
      return { ...state, cart: payload.cart };

    default:
      return state;
  }
};
export default CartReducer;
