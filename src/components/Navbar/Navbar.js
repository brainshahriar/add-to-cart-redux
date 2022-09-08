import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar= () => {
  const cart = useSelector((state) => state.product.cart);
  const handleCart = () =>{
    cart.length<1 && alert("Cart is empty")
  }
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">BJIT Shopping Cart</h2>
      </Link>
      <Link to={`${cart.length>0 ? "/cart" : "#"}`} onClick={handleCart}>
        <div className="navbar__cart">
          <h3 className="navbar__cart__title">Cart</h3>
          <img
            className="navbar__cart__image"
            src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
            alt="shopping cart"
          />
          <div className="navbar__cart__counter">{cart.length}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
