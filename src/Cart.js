import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => state.reducer);
  let alertState = useSelector((state) => state.alertReducer);
  let dispatch = useDispatch();
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>사이즈</th>
            <th>가격</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>
                  {item.num}
                  <button
                    onClick={() => {
                      dispatch({ type: "plus", num: item.id });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "minus", num: item.id });
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch({ type: "delete", num: item.id });
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {alertState === true ? (
        <div className="my-alert">
          재고가 얼마 남지 않았습니다 !!
          <button onClick={() => dispatch({ type: "닫기" })}>닫기</button>
        </div>
      ) : null}
    </>
  );
}

// function store(state) {
//   console.log(state);
//   return {
//     state: state.reducer,
//     alertState: state.alertReducer,
//   };
// }
// export default connect(store)(Cart);
export default Cart;
