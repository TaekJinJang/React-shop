/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 제목 = styled.div`
  padding: 20px;
  font-size: 25px;
`;
function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState("");
  useEffect(() => {
    let 특가;
    setTimeout(() => {
      특가 = alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(특가);
    };
  }, []);

  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((상품) => {
    return 상품.id == id;
  });
  return (
    <div className="container text-center">
      <제목 className="red"> 상세 페이지 </제목>
      {inputData}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      />
      {alert === true ? (
        <div className="my-alert">재고가 얼마 남지 않았습니다 !!</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (찾은상품.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <Info 재고={props.재고} 찾은상품={찾은상품} />
          <button
            className="btn btn-danger"
            onClick={() => {
              let array = [...props.재고];
              array[찾은상품.id]--;
              props.재고변경(array);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
function Info(props) {
  return <p> 재고 : {props.재고[props.찾은상품.id]}</p>;
  console.log(props.찾은상품.id);
}
export default Detail;
