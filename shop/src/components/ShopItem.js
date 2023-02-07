import React from "react";

const ShopItem = ({ itemProps }) => {
  return (
    <>
      <img src={itemProps.image} width="80%" alt="상품1" />
      <h4>{itemProps.title}</h4>
      <p>{itemProps.content}</p>
    </>
  );
};

export default ShopItem;
