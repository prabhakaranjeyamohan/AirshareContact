import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Badge, Nav, Dropdown, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Logo from "../assets/gifs/Logo_100h.gif";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import "../styles/Header.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    searchDispatch,
  } = CartState();

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="" height="50px" />
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={
            showLinks
              ? { transition: "0.5s", overflow: "visible" }
              : { overflow: "hidden" }
          }
        >
          <ul className="links" ref={linksRef}>
            <Nav.Link className = "navButton" href="/solution">SOLUTION</Nav.Link>
            <Nav.Link className = "navButton" href="/products">PRODUCTS</Nav.Link>
            <Nav.Link className = "navButton" href="/contact">CONTACT</Nav.Link>
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
                  <FaShoppingCart color="white" fontSize="25px" />
                  <Badge bg="none">{cart.length}</Badge>
                </Dropdown.Toggle>

                {/* Dropdown.Menu is where the items within will be rendered*/}
                <Dropdown.Menu style={{ minWidth: 370 }}>
                  {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => (
                        <span className="cartitem" key={prod.id}>
                          <img
                            src={prod.img}
                            className="cartItemImg"
                            alt={prod.name}
                          />
                          <div className="cartItemDetail">
                            <span>{prod.name}</span>
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
                      <Link to="/cart">
                        <Button
                          style={{ width: "95%", margin: "0 10px" }}
                          onClick={() => setShowLinks(false)}
                        >
                          Go To Cart
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}> Cart is Empty!</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
