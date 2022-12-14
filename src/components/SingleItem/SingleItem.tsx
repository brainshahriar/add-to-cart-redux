import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './SingleItem.scss'
import {data} from '../../constants/product-data'
import { useParams } from "react-router-dom";
import { setCart } from "../../redux/productSlice";
import { RootState } from "../../redux/store";

interface Data {
  _id:string,
  title:string,
  description:string,
  price:string,
  image:string
}

const SingleItem:React.FC = () => {
  const {id} = useParams()
  const [product,setProduct]=useState<any>({})
  const getProduct = ()=>{
    if(data.length>0){
       data.map((item:any)=>{
        if(item._id === id){
          setProduct(item)
        }
       })
    }
  }
  useEffect(()=>{
    getProduct()
  },[id]
  )

  const cart = useSelector((state:RootState) => state.product.cart);
  const dispatch = useDispatch();

  const addTocart = ()=>{
    const newCart:Array<any>= [...cart]
    if(newCart.find((c:any)=>c.product===product)){
         newCart.map((c:any,index:any)=>{
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
    <div className="singleItem">
      <img className='singleItem__image' src={product?.image} alt="" />
      <div className='singleItem__details'>
        <p className="singleItem__details__title">{product?.title}</p>
        <p className="singleItem__details__description">{product?.description}</p>
        <p className="singleItem__details__price">$ {product?.price}</p>

        <button className="singleItem__details__addBtn" onClick={addTocart} >Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleItem;