import React from "react";
import "../App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopDatas from "../data/shopDatas.json";
import ShopItem from "../components/ShopItem";

const MainPage = () => {
  return (
    <div className="App">
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
