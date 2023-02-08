import React from "react";
import "../App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopDatas from "../data/shopDatas.json";
import ShopItem from "../components/ShopItem";

const MainPage = () => {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {shopDatas.map((itemProps) => (
            <Col sm key={itemProps.id}>
              <ShopItem itemProps={itemProps} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
