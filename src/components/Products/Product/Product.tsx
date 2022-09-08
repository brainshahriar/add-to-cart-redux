import { Link } from "react-router-dom";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/productSlice";
import type { RootState } from "../../../redux/store";

type data={
  _id:string,
  title:string,
  description:string,
  price:string,
  image:string
}

interface Data{
  product:data
}

const Product:React.FC<Data>= ({product}) => {

  const cart = useSelector((state:RootState) => state.product.cart);
  const dispatch = useDispatch();
  const handleCart = ()=>{
    const newCart:Array<any>=[...cart]
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
      const obj:any={
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