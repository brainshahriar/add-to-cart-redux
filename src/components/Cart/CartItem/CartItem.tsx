import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCart } from "../../../redux/productSlice";
import { RootState } from "../../../redux/store";
import styles from "./CartItem.module.css";

type data={
  product: any;
  quantity: string | number | readonly string[] | undefined;
  _id:string,
  title:string,
  description:string,
  price:string,
  image:string
}

interface Data{
  cartItem:data
  i:number
}

const CartItem:React.FC<Data>= ({cartItem,i}) => {
  const cart = useSelector((state:RootState) => state.product.cart);
  const dispatch = useDispatch();
  const ChangeQuantity =(e:any)=>{
    let newCart:Array<any> = [...cart]
         let newObj={
           product:cartItem.product,
           quantity:e.target.value
          }
          newCart[i]=newObj;
          dispatch(setCart(newCart))
  }

    const handleDelete =(e:any)=>{
      let newCart = [...cart]
           const anotherCart=newCart.filter((c)=>c!==cartItem)
          dispatch(setCart(anotherCart))
    }

  return (
    <div className={styles.cartItem}>
      <img
      alt=""
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