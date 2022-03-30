import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productReducer from "./productReducer";
import CartReducer from "./CartReducer";
const rootreducer = combineReducers({
  authReducer,
  productReducer,
  CartReducer,
});
export default rootreducer;
