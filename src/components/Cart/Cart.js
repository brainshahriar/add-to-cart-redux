import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
const Cart= () => {
    const cart = useSelector((state) => state.product.cart);
    const [total,setTotal]=useState(0)
    const amountCalculator = () =>{
      let sum = 0;
      cart.map((c)=>{
        sum=sum + c.product?.price * c.quantity
      })
      setTotal(sum)
    }
    useEffect(() => {
      amountCalculator();
    }, [cart])
    
    return (
        <div className={styles.cart}>
        <div className={styles.cart__items}>
        {
          cart.map((c,i)=>  <CartItem key={i} cartItem={c} i={i} />)
        }
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Cart Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({cart?.length} items)</span>
            <span>$ {total}</span>
          </div>
          <button className={styles.summary__checkoutBtn}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    );
};

export default Cart;