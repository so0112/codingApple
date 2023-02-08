import React, { useState } from "react";
import "../App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopDatas from "../data/shopDatas.json";
import ShopItem from "../components/ShopItem";

const MainPage = () => {
  const [shopDatasState, setShopDatasState] = useState([...shopDatas]);

  //TODO: 함수 관심사 분리하기
  const onSortShopItme = () => {
    let copyShopDatasState = [...shopDatasState];
    copyShopDatasState.sort(function (a, b) {
      if (a.title[0] > b.title[0]) {
        return 1;
      }
      if (a.title[0] < b.title[0]) {
        return -1;
      }
      return 0;
    });
    setShopDatasState(copyShopDatasState);
    console.log(copyShopDatasState);
  };

  return (
    <div className="App">
      <div className="main-bg"></div>
      <button onClick={onSortShopItme}>정렬 버튼</button>
      <Container>
        <Row>
          {shopDatasState.map((itemProps) => (
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
