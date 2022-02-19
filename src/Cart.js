import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        {props.state.map((item, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.title}</td>
              <td>{item.id}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function store(state) {
  return {
    state: state,
  };
}
export default connect(store)(Cart);
// export default Cart;
