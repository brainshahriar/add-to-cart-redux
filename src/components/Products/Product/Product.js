import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/productSlice";


const Product = ({product}) => {

  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const handleCart = ()=>{
    const newCart = [...cart]
    if(newCart.find((c)=>c.product===product)){
         newCart.map((c,index)=>{
          if(c.product===product){
            let newObj={
              product:product,
              quantity:c.quantity +1
             }
             newCart[index]=newObj;
             dispatch(setCart(newCart))
          }
         })
    }
    else{
      const obj={
        product:product,
        quantity:1
      }
      newCart.push(obj)
    }
    dispatch(setCart(newCart))
  }
  return (
    <>
    <div className='product'>
      <img className='product__image' src={product.image} alt="" />

      <div className='product__details'>
        <p className="details__title">{product.title}</p>
        <p className='details__desc'>{product.description}</p>
        <p className='details__price'>$ {product.price}</p>
      </div>

      <div className="product__buttons">
        <Link to={`/product/${product._id}`}>
          <button className='buttons__btn buttons__view'>
            View Item
          </button>
        </Link>
        <button className="buttons__btn buttons__add" onClick={handleCart}>
          Add To Cart
        </button>
      </div>
    </div>
    </>
    
  );
};

export default Product;