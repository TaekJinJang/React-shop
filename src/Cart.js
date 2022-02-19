import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <>
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
                <td>
                  {item.num}
                  <button
                    onClick={() => {
                      props.dispatch({ type: "plus" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "minus" });
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertState === true ? (
        <div className="my-alert">
          재고가 얼마 남지 않았습니다 !!
          <button onClick={() => props.dispatch({ type: "닫기" })}>닫기</button>
        </div>
      ) : null}
    </>
  );
}

function store(state) {
  console.log(state);
  return {
    state: state.reducer,
    alertState: state.alertReducer,
  };
}
export default connect(store)(Cart);
// export default Cart;
