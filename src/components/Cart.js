import { CartState } from '../Context/Context';
import { Image, FormControl, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { AiFillDelete} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {

  const { state: { cart }, dispatch } = CartState();

  const [total, setTotal] = useState()

  //Everytime cart variable changes, the total sum of product prices will be calculated
  useEffect(() =>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)* curr.qty, 0))
  },[cart])

  return (
    <div className ='home'>
      <div className ='productContainer'>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={ prod.id }>
              <Row>
                <Col md={2}>
                  <Image src={ prod.img } alt={ prod.name } fluid rounded></Image>
                </Col>

                <Col md={2}>
                  <span>{ prod.name }</span>
                </Col>

                <Col md={2}>
                  <span>$ { prod.price }</span>
                </Col>

                <Col md={2}>
                  <FormControl as='select' value={ prod.qty } 
                  onChange= {(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value,
                      },
                    })
                  }
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </FormControl>
                </Col> 

                <Col md={2}>
                  <Button type="button" variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <div>
        <div className= 'filters summary'>
          <span className='title'>
            Subtotal ({cart.length}) items
          </span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
          <Button type="button" disabled={cart.length === 0}> Submit Request </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart