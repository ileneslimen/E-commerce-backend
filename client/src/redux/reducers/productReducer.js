import { GET_PRODUCT, GET_PRODUCTS } from "../types/productTypes";

const initialState = {
  products: [],
  product: {},
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload.products };
    case GET_PRODUCT:
      return { ...state, product: payload.product };
    default:
      return state;
  }
};
export default productReducer;
