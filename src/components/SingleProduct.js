import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartState } from '../Context/Context';
import {Link} from "react-router-dom";
import '../styles/Products.css';

const SingleProduct = ({ prod }) => {

  const {state: { cart }, dispatch} = CartState()

  return (
    <div className='products'>
        {/*Card component from react bootstrap*/}
        <Card>
          {/* Passing specific selected product parameters to break out page in Link tag*/}
          <Link to = '/breakout'  state={ prod }>
            <Card.Img variant='top' src={ prod.img } alt={ prod.name }/>
          </Link>
            <Card.Body>
                  <Link to ='/breakout'>
                  <Card.Title>{ prod.name }</Card.Title>
                  </Link>
                <Card.Subtitle style= {{ paddingBottom: 10 }}>
                    <span>{ prod.description }</span>
                </Card.Subtitle>

                {
                  //some() checks wheather or not a particular entity exists in array
                  cart.some(p => p.id === prod.id) ? (
                    <Button variant="danger" onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod
                      })
                    }}>Remove from cart</Button>

                  ) : (
                    
                    <Button onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: prod
                      })
                    }}>Add to cart</Button>
                  )
                }
                
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct