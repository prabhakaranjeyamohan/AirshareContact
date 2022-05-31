import React from 'react';
import { CartState } from '../Context/Context';
import SingleProduct from './SingleProduct';
import Launcher from './ProductType/Launchers';
import Interceptor from './ProductType/Interceptors';
import '../styles/Products.css';

const Products = () => {

  //Destructured state to take out/ "unpack" products
  const { state: {products} } = CartState(); 

  return (
    <div>
      <div className='heading'><h1>Launcher Systems</h1></div>
        <div className='home'>
          <div className='productContainer'>
            <>
            {
                products.filter(prod => prod.type === "Launcher").map((prod) => {
                return <SingleProduct prod={ prod } key={prod.id} />
              })
            }

            </>
          </div>
        </div>
      
        <div className='heading2'><h1>Interceptor-UX Missiles</h1></div>
        <div className='home'>
          <div className='productContainer'>
            <>
            {
                products.filter(prod => prod.type === "Missile").map((prod) => {
                return <SingleProduct prod={ prod } key={prod.id} />
              })
            }

            </>
          </div>
        </div>

        <div className='heading2'><h1>Payloads & Countermeasures</h1></div>
        <div className='home'>
          <div className='productContainer'>
            <>
            {
                products.filter(prod => prod.type === "CM").map((prod) => {
                return <SingleProduct prod={ prod } key={prod.id} />
              })
            }

            </>
          </div>
        </div>

        <div className='heading2'><h1>Command & Control Elements</h1></div>
        <div className='home'>
          <div className='productContainer'>
            <>
            {
                products.filter(prod => prod.type === "CC").map((prod) => {
                return <SingleProduct prod={ prod } key={prod.id} />
              })
            }

            </>
          </div>
        </div>
    </div>
  );
}

export default Products