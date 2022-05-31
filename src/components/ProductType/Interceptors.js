import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartState } from '../../Context/Context';
import {Link} from "react-router-dom";
import '../../styles/Launchers.css';

const Interceptors = (prod) => {

  //DONT DELETE OR IT MESSES UP THE LAYOUT OF PRODUCTS PAGE FOR SOME REASON
  
  const {state: { cart }, dispatch} = CartState()

  return (
    <div className='products'>
      
    </div>
  )
}

export default Interceptors