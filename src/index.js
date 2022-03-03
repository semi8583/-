import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom"; //라이브러리 이름

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

let alert초기값 = true;

function reducer2(state = alert초기값, action) {
  if (action.type === "false") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let 기본값 = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발2", quan: 1 },
];

function reducer(state = 기본값, 액션) {
  if (액션.type === "항목추가") {
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  } else if (액션.type === "수량증가") {
    // 액션.type 데이터 수정되는 조건
    // 액션.payload
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    // 액션.type 데이터 수정되는 조건
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}

// let store = createStore(reducer);

let store = createStore(combineReducers({ reducer, reducer2 }));
// 페이지 여러개 나눌 수 있음
//HashRouter 라우팅 안전하게 할 수 있게 도움 url #뒤로 서버에 전달 되지 않음
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
