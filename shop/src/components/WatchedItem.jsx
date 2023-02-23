import React from "react";
import { Link } from "react-router-dom";

const WatchedItem = ({ WatchedProos }) => {
  return (
    <Link to={`/detail/${WatchedProos.id}`}>
      <img src={WatchedProos.image} width="80%" alt="상품1" />
      <p>{WatchedProos.title}</p>
    </Link>
  );
};

export default WatchedItem;
