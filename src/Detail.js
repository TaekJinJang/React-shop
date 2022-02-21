/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

let 제목 = styled.div`
  padding: 20px;
  font-size: 25px;
`;
function Detail(props) {
  let [alert, alert변경] = useState(false);
  let [inputData, inputData변경] = useState("");
  useEffect(() => {
    let 특가 = "";
    setTimeout(() => {
      특가 = props.dispatch({ type: "닫기" });
    }, 1000);
    return () => {
      clearTimeout(특가);
    };
  }, []);
  let [tab, tab변경] = useState(0);

  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((상품) => {
    return 상품.id == id;
  });
  return (
    <div className="container text-center">
      <제목 className="red"> 상세 페이지 </제목>

      {props.alertState === false ? null : (
        <div className="my-alert">재고가 얼마 남지 않았습니다 !!</div>
      )}
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
          사이즈
          <input
            onChange={(e) => {
              inputData변경(e.target.value);
            }}
          />
          <button
            className="btn btn-danger"
            onClick={() => {
              let array = [...props.재고];
              array[찾은상품.id]--;
              props.재고변경(array);
              props.dispatch({
                type: "장바구니추가",
                payload: {
                  id: 찾은상품.id,
                  content: 찾은상품.content,
                  title: 찾은상품.title,
                  price: 찾은상품.price,
                  num: props.재고[찾은상품.id],
                  size: inputData,
                },
              });
              history.push("/cart");
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
        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                tab변경(0);
                alert변경(false);
              }}
            >
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                tab변경(1);
                alert변경(false);
              }}
            >
              Option 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <CSSTransition in={alert} classNames="tab-style" timeout={500}>
        <TabsContent tab={tab} alert={alert} alert변경={alert변경} />
      </CSSTransition>
    </div>
  );
}
function TabsContent(props) {
  useEffect(() => {
    props.alert변경(true);
  });
  if (props.tab === 0) {
    return <div>0번 탭 입니다.</div>;
  } else if (props.tab === 1) {
    return <div>1번 탭 입니다.</div>;
  }
}
function Info(props) {
  return <p> 재고 : {props.재고[props.찾은상품.id]}</p>;
  console.log(props.찾은상품.id);
}

function store(state) {
  console.log(state);
  return {
    state: state.reducer,
    alertState: state.alertReducer,
  };
}
export default connect(store)(Detail);
