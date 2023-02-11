import React from "react";
import { Link } from "react-router-dom";

const ShopItem = ({ itemProps }) => {
  return (
    <>
      <Link to={`/detail/${itemProps.id}`}>
        <img src={itemProps.image} width="80%" alt="상품1" />
        <h4>{itemProps.title}</h4>
        <p>{itemProps.content}</p>
      </Link>
    </>
  );
};

export default ShopItem;
