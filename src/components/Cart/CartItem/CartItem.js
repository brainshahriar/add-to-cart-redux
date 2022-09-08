import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCart } from "../../../redux/productSlice";
import styles from "./CartItem.module.css";

const CartItem = ({cartItem,i}) => {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const ChangeQuantity =(e)=>{
    let newCart = [...cart]
         let newObj={
           product:cartItem.product,
           quantity:e.target.value
          }
          newCart[i]=newObj;
          dispatch(setCart(newCart))
  }

    const handleDelete =(e)=>{
      let newCart = [...cart]
           const anotherCart=newCart.filter((c)=>c!==cartItem)
          dispatch(setCart(anotherCart))
    }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={cartItem.product.image}
        // alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{cartItem.product.title}</p>
        <p className={styles.details__desc}>{cartItem.product.description}</p>
        <p className={styles.details__price}>$ {cartItem.product.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" onChange={ChangeQuantity} value={cartItem.quantity} />
        </div>
        <button onClick={handleDelete} className={styles.actions__deleteItemBtn}>
          <img
            src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-delete-vector-icon-png-image_702549.jpg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;