import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
