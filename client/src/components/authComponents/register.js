import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/Authactions";
function Register() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="login-sqare">
          <h1 className="title">Sign Up</h1>
          <form action="#" className="sign-form">
            <div>
              <input
                className="input"
                type="email"
                name="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email or phone number"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <input
                className="input"
                type="password"
                name="password"
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(register({ email, password }, Navigate));
                }}
              >
                Sign Up
              </button>
            </div>
            <div class="new-to-netflix">
              <p>
                New to Us?
                <Link to="/signIn">
                  {" "}
                  <span class="sign-up-now">
                    {" "}
                    <a>Already have an account Sign In.</a>
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Register;
