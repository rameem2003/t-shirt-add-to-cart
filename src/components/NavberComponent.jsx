import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FaBagShopping } from "react-icons/fa6";
import Sidebar from "./Sidebar";

const NavberComponent = ({ cart, addCart, quantity }) => {
  const [hide, sethide] = useState(true);

  const handleToggle = () => {
    sethide(false);
  };
  return (
    <>
      <Sidebar
        hide={hide}
        sethide={sethide}
        cart={cart}
        addCart={addCart}
        quantity={quantity}
      />
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-light fs-2">
            SHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="mx-2 fs-6 fw-bold text-light"
                href="#action1"
              >
                Menu
              </Nav.Link>
              <Nav.Link
                className="mx-2 fs-6 fw-bold text-light"
                href="#action1"
              >
                Rewards
              </Nav.Link>
              <Nav.Link
                className="mx-2 fs-6 fw-bold text-light"
                href="#action1"
              >
                Locations
              </Nav.Link>
              <Nav.Link
                className="mx-2 fs-6 fw-bold text-light"
                href="#action1"
              >
                Gift Cards
              </Nav.Link>
              <Nav.Link
                className="mx-2 fs-6 fw-bold text-light"
                href="#action1"
              >
                Log in
              </Nav.Link>
            </Nav>

            <a className="cartButton" onClick={handleToggle}>
              <FaBagShopping className="text-light" size={30} />
              <span>{cart.length}</span>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavberComponent;
