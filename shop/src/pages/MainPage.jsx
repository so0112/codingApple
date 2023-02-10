import React, { useState } from "react";
import "../App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shopDatas from "../data/shopDatas.json";
import ShopItem from "../components/ShopItem";
import axios from "axios";

const MainPage = () => {
  const [shopDatasState, setShopDatasState] = useState([...shopDatas]);
  const [isLoading, setIsLoading] = useState(false);

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

  const plusShopItem = () => {
    console.log(isLoading);
    setIsLoading(true);
    setTimeout(() => {
      axios.get("https://codingapple1.github.io/shop/data3.json").then((res) => {
        console.log(res.data);
        setShopDatasState([...shopDatasState, ...res.data]);
        setIsLoading(false);
      });
    }, 5000);
    console.log(isLoading);
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
      <button onClick={plusShopItem}>axios 추가 버튼</button>
      {isLoading && <div>로딩중asdasdasdasd</div>}
    </div>
  );
};

export default MainPage;
