import React from "react";
import { useParams } from "react-router-dom";
import shopDatas from "../data/shopDatas.json";

const DetailPage = () => {
  const { id } = useParams();

  return (
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
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
