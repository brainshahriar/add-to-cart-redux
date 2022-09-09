import React from "react";
import {Meta,Story} from '@storybook/react'
import Navbar from "./Navbar";

export default {
    title: "Navbar",
    component: Navbar,
  } as Meta;

const Template: Story= () =>    <div className="navbar">

  <h2 className="navbar__logo">BJIT Shopping Cart</h2>

  <div className="navbar__cart">
    <h3 className="navbar__cart__title">Cart</h3>
    <img
      className="navbar__cart__image"
      src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
      alt="shopping cart"
    />
    <div className="navbar__cart__counter">5</div>
  </div>

</div>;

export const Navbars = Template.bind({});