import { CartState } from '../Context/Context';
import { Image, FormControl, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { AiFillDelete} from 'react-icons/ai';
import { useEffect, useState, useRef } from 'react';
import '../styles/Cart.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

  const { state: { cart }, dispatch } = CartState();

  const [total, setTotal] = useState()

  //Everytime cart variable changes, the total sum of product prices will be calculated
  useEffect(() =>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)* curr.qty, 0))
  },[cart])

  //code to send email and display alert on submission of form
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_962iwvu', 'template_tvve5rh', form.current, 'AM0wglsw7C7NzVk5a')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  const notify = () => toast("Your request has been sent!");
  

  return (
    <div className ='home'>
      <div className ='cartContainer'>
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
                  <span> {/* filler to create space */} </span>
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
                <Col md={2}>{/* filler to create space */}</Col>

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
          <form id="contact-form" method="POST" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <button type="submit" disabled={cart.length === 0} onClick={notify}> Submit Request </button>
          <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart