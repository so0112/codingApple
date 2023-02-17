import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import shopDatas from "../data/shopDatas.json";
import { addItem } from "../store/shoesSlice";

const DetailPage = () => {
  const { id } = useParams();
  // const [saleVisible, setSaleVisible] = useState(true);
  const [alertCaution, setAlertCaution] = useState(false);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  // useEffect 에 있는   return 문이 제일 먼저 실행된다.
  useEffect(() => {
    if (isNaN(inputText) !== true) {
      setAlertCaution(false);
    } else {
      setAlertCaution(true);
    }
  }, [inputText]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{shopDatas[id].title}</h4>
            <p>{shopDatas[id].content}</p>
            <p>{shopDatas[id].price} 원</p>
            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(addItem({ id: Number(id), name: shopDatas[id].title, count: 1 }))}>
              장바구니 추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const S = {
  ColorButton: styled.button`
    background-color: ${(props) => props.bg};
  `,
  InutAlertCaution: styled.div`
    display: ${(props) => (props.alertCaution ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    height: 50px;
    color: white;
    background-color: tomato;
  `,
};

export default DetailPage;
