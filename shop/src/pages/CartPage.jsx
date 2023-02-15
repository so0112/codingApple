import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CartPage = () => {
  let a = useSelector((state) => {
    return state.shoes;
  });
  console.log(a);
  return (
    <div>
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
          {a.map((shoes, index) => (
            <tr>
              <td>{shoes.id}</td>
              <td>{shoes.name}</td>
              <td>{shoes.count}</td>
              <td>수량 변경</td>
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
