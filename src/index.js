import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let defaultState = [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    num: 10,
  },

  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
    num: 11,
  },

  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
    num: 12,
  },
];
function alertReducer(state = true, action) {
  if (action.type === "닫기") {
    state = false;
  }
  return state;
}
function reducer(state = defaultState, action) {
  if (action.type === "장바구니추가") {
    let copy = [...state];

    let 중복 = copy.find((item) => {
      return item.id == action.payload.id;
    });

    console.log(action.payload);
    중복 == undefined ? copy.push(action.payload) : 중복.num++;

    return copy;
  } else if (action.type === "plus") {
    let copy = [...state];
    copy[0].num++;
    return copy;
  } else if (action.type === "minus") {
    let copy2 = [...state];
    copy2[0].num--;
    return copy2;
  } else {
    return state;
  }
}
let store = createStore(combineReducers({ reducer, alertReducer }));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
