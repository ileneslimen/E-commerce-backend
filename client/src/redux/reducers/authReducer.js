import {
  CLEARERRORS,
  FAIL,
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../types/authTypes";

const initialState = {
  user: null,
  errors: null,
  auth: false,
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("role", payload.user.role);
      return { ...state, user: payload.user, auth: true, errors: null };
    case FAIL:
      return { ...state, auth: false, user: null, errors: payload };

    case GET_CURRENT:
      return { ...state, user: payload, auth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return { ...state, auth: false, user: null, errrors: null };
    case CLEARERRORS:
      return { ...state, errors: null };
    default:
      return state;
  }
};
export default Reducer;
