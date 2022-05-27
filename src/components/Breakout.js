import React from 'react';
import { useLocation} from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../styles/Breakout.css';
import priceList from '../assets/pdfs/2022 OVERWATCH PRICE LIST.pdf';
import { CartState } from '../Context/Context';
import {Link} from "react-router-dom";

const Breakout = () => {

    const {state: { cart }, dispatch} = CartState()
    const location = useLocation()
    const data = location.state


  return (
    <div className='breakout'>
        <div className= 'leftSide'>
            <img src = { data.img } alt='' width="100%" height="auto"></img>
        </div>

        <div className= 'rightSide'>
            <div className = 'border'>
                <h3>Name</h3>
                <p> { data.name } </p>
            </div> 
            <div className = 'border'>
                <h3>Description</h3>
                <p> { data.description } </p>
            </div> 
            <div>
                <span className = 'border'>
                <h3 >Key Features</h3>
                <ul>
                    { data.moreInfo.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
                </span>
            </div> 
            <div className = 'border'>
                <a href={ priceList } target='_blank' rel='noreferrer'><h5>Price List</h5></a>
            </div>

            {
                  //some() checks wheather or not a particular entity exists in array
                  cart.some(p => p.id === data.id) ? (
                    <Link to='/products'>
                    <Button variant="danger" onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: data
                      })
                    }}>Remove from cart</Button></Link>

                  ) : (
                    <Link to='/products'>
                    <Button onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: data
                      })
                    }}>Add to cart</Button></Link>
                  )
                }
        </div>
    </div>

  )
}

export default Breakout