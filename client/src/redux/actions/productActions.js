import axios from "axios";
import { GET_PRODUCT, GET_PRODUCTS } from "../types/productTypes";

export const get_products = () => async (dispatch) => {
  try {
    const res = await axios.get("/product");
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const get_product = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/product/${id}`);
    dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
