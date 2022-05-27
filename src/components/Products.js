import React from 'react';
import { CartState } from '../Context/Context';
import SingleProduct from './SingleProduct';
import '../styles/Products.css';

const Products = () => {

  //Destructured state to take out/ "unpack" products
  const { state: {products} } = CartState(); 

  const transformProducts = () => {
    let sortedProducts = products;
  }

  return (
    <div className='home'>
      <div className='productContainer'>
          {
            products.map((prod) => {
              return <SingleProduct prod={ prod } key={prod.id} />
            })
          }
      </div>
    </div>
  );
}

export default Products