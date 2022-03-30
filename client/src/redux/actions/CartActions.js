import axios from "axios";
import { ADDTOCART, GET_CART } from "../types/cartTypes";

export const addtocart = (id, navigate) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.post(`/cart/${id}`, null, config);

    dispatch({ type: ADDTOCART, payload: res.data });
    navigate("/cart");
  } catch (error) {
    console.log(error);
  }
};
export const getcart = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(`/cart/${id}`, config);
    dispatch({ type: GET_CART, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
