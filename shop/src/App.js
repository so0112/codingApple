import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopData from "./data/shopData.json";

function App() {
  console.log(shopData);
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
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="상품1" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" alt="상품1" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" alt="상품1" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
