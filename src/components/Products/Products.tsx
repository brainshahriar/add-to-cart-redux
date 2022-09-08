import React from "react";
import Product from "./Product/Product";
import './Products.scss'
import {data} from '../../constants/product-data'

const Products: React.FC = () => {
  return (
    <div>
      <div className="products">
        {
          data.map((d,i)=><Product key={i} product={d} />)
        }
      </div>
    </div>
  );
};

export default Products;
