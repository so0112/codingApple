import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount } from "../store/shoesSlice";
import { addNum, minusNum } from "../store/testSlice";

const CartPage = () => {
  let test = useSelector((state) => state.testNum);
  let shoes = useSelector((state) => state.shoes);
  let dispatch = useDispatch();

  const findShoesIndex = (id) => {
    return shoes.findIndex((shoe) => shoe.id === id);
  };

  return (
    <div>
      <h1>test {test.num}</h1>
      <button onClick={() => dispatch(addNum())}>+</button>
      <button onClick={() => dispatch(minusNum())}>-</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoes, index) => (
            <tr key={shoes.id}>
              <td>{shoes.id}</td>
              <td>{shoes.name}</td>
              <td>{shoes.count}</td>
              <td>
                <button
                  onClick={() => {
                    const index = findShoesIndex(shoes.id);
                    dispatch(addCount(index));
                  }}>
                  +
                </button>
                <button
                  onClick={() => {
                    const index = findShoesIndex(shoes.id);
                    dispatch(minusCount(index));
                  }}>
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
