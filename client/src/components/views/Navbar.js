import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcurrent, logout } from "../../redux/actions/Authactions";
import { get_products } from "../../redux/actions/productActions";
import "./Navbar.css";
function Navbar() {
  const dispatch = useDispatch();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getcurrent());
  }, []);
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(getcurrent());
  }, [user]);
  return (
    <>
      {token && user && user.role == "user" ? (
        <nav>
          <ul>
            <Link to="/">
              <li onClick={() => dispatch(get_products())}>Home</li>
            </Link>

            <Link to="/signUp">
              <li onClick={() => dispatch(logout())}>logout</li>
            </Link>
          </ul>
        </nav>
      ) : token && user && user.role == "admin" ? (
        <nav>
          <ul>
            <Link to="/">
              <li onClick={() => dispatch(get_products())}>Home</li>
            </Link>

            <Link to="/">
              <li onClick={() => dispatch(logout())}>logout</li>
            </Link>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <Link to="/">
              <li onClick={() => dispatch(get_products())}>Home</li>
            </Link>
            <Link to="/signIn">
              <li>Sign In</li>
            </Link>
            <Link to="/signUp">
              <li>Sign Up</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
