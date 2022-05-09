import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          {" "}
          <i className="bx bxs-t-shirt" />
          adidas
        </a>
        <ul className="navbar">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#new">New Arrival</a>
          </li>
          <li>
            <a href="#product">Products</a>
          </li>
          <li>
            <a href="#reviews">Reeviews</a>
          </li>
        </ul>
        <div className="header-icons">
          <i className="bx bx-menu" id="menu-icon" />
          <i className="bx bx-search" id="search-icon" />
          <i className="bx bx-cart-download" id="cart-icon" />
          <i className="bx bx-user" id="user-icon" />
        </div>
        <div className="search-box">
          <input type="search" name="" id="" placeholder="search here..." />
        </div>
        <div className="cart">
          {/*cbox 1*/}
          <div className="box">
            <img src="shirt.jpeg" alt="" />
            <div className="text">
              <h3>T-shirt 14A</h3>
              <span>$50.05</span>
              <span>x1</span>
            </div>
            <i className="bx bxs-trash-alt" />
          </div>
          {/*box*/}
          <div className="box">
            <img src="shirt.jpeg" alt="" />
            <div className="text">
              <h3>T-shirt 14A</h3>
              <span>$50.05</span>
              <span>x1</span>
            </div>
            <i className="bx bxs-trash-alt" />
          </div>
          <h2>Total: $100.10</h2>
          <a href="#" className="btn">
            CHeckout
          </a>
        </div>
        {/*user*/}
        <div className="user">
          <h2>login Now</h2>
          <input type="email" placeholder="Your Email..." />
          <input type="password" name="" id="" placeholder="Password" />
          <input type="submit" defaultValue="login" className="login-btn" />
          <p>
            Forget Password <a href="#">reeset Now</a>
          </p>
          <p>
            Dont't have account<a href="#">reeset Now</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
