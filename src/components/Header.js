import React from 'react';
import { Badge, Nav, Dropdown, FormControl, Container, Navbar, Button } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete} from 'react-icons/ai';
import Logo from "../assets/gifs/Logo_100h.gif";
import { Link } from "react-router-dom";
import { CartState } from '../Context/Context';
import '../styles/Header.css';

const Header = () => {

    const {
        state: { cart },
        dispatch,
        searchDispatch
    } = CartState();

  return (
    <div> 
        <Navbar bg="light" variant="light" className='navbar'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'><img src ={ Logo } alt='' height="50px"/></Link>
                </Navbar.Brand>
                  <Nav.Link href='/solution' className='navlinks'>Solution</Nav.Link>
                  <Nav.Link href='/products' className='navlinks'>Products</Nav.Link>
                  <Nav.Link href='/contact' className='navlinks'>Contact</Nav.Link>

                {/* //search bar 
                <Navbar.Text className="search">
                    <FormControl style = {{width:500}}
                        placeholder = "Search a product" 
                        className="m-auto" //m-auto creates equal spacing on either sides
                        onChange= {(e) => {
                          searchDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload: e.target.value
                          });
                        }}
                    />
                </Navbar.Text>*/}

                {/* Shopping cart icon with dropdown */}
                <Nav>
                    <Dropdown align="end">
                        {/* Dropdown.Toggle is the button itself */}
                        <Dropdown.Toggle variant="success"> 
                            <FaShoppingCart color='white' fontSize="25px" />
                            <Badge bg="none">{ cart.length }</Badge>
                        </Dropdown.Toggle>

                        {/* Dropdown.Menu is where the items within will be rendered*/}
                        <Dropdown.Menu style={{minWidth:370}}>

                            { cart.length > 0 ? (
                            <>
                                {cart.map(prod => (
                                    <span className="cartitem" key={prod.id}>
                                    <img
                                      src={ prod.img }
                                      className="cartItemImg"
                                      alt={ prod.name }
                                    />
                                    <div className="cartItemDetail">
                                      <span>{ prod.name }</span>
                                    </div>
                                    <AiFillDelete
                                      fontSize="20px"
                                      style={{ cursor: "pointer" }}
                                      onClick={() =>
                                        dispatch({
                                          type: "REMOVE_FROM_CART",
                                          payload: prod,
                                        })
                                      }
                                    />
                                  </span>

                                ))}
                                <Link to='/cart'>
                                    <Button style={{ width: '95%', margin: "0 10px" }}> Go To Cart</Button>
                                </Link>
                            </>
                            ) : (
                            <span style={{ padding: 10 }}> Cart is Empty!</span>)}

                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
     </div>
  )
}

export default Header