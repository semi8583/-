/*eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// import 작명 from "./data.js"; //변수 하나일 때
// import { name, name2 } from "./data.js"; //변수 2개이상일땐 작명 불가
import Data from "./data.js";
import Detail from "./Detail.js";
import axios from "axios";

import Cart from "./cart.js";
import Cart2 from "./cart2.js";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      {/* {작명}
      {name}
      {name2} */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route exact path="/">
        <div className="background">
          <h1>20% Season off</h1>
          <p>현재 할일 행사중</p>
          <p>
            <button variant="primary">Learn more</button>
          </p>
        </div>
      </Route>
      <Route exact path="/cart">
        <Cart></Cart>
      </Route>
      <Route exact path="/cart2">
        <Cart2></Cart2>
      </Route>
      <Route exact path="/detail2">
        <Detail></Detail>
      </Route>
      <Route exact path="/detail3">
        <div className="container">
          <div className="row">
            {shoes.map(function (shoe) {
              return (
                <Detail
                  url={shoe.url}
                  title={shoe.title}
                  content={shoe.content}
                  price={shoe.price}
                />
              );
            })}
            {/* <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
            <h4> {shoes[0].title}</h4>
            <p>
              {shoes[0].content} {shoes[0].price}
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
            />
            <h4> {shoes[1].title}</h4>
            <p>
              {shoes[1].content} {shoes[1].price}
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
            />
            <h4> {shoes[2].title}</h4>
            <p>
              {shoes[2].content} {shoes[2].price}
            </p>
          </div> */}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              // fetch(url).then  이건 json object으로 바꿔주지 않는다

              axios
                .get("https://codingapple1.github.io/shop/data2.json") //서버한테 get 요청
                .then((result) => {
                  //성공
                  console.log("성공했어요");
                  console.log(result); //성공한 것에 대한 데이터
                  console.log(result.data);
                })
                .catch(() => {
                  console.log("실패했어요");
                }); //실패시
            }}
          >
            더보기
          </button>
        </div>
      </Route>
      <Route exact path="/detail">
        <div className="container">
          <div className="row">
            {shoes.map(function (shoe) {
              return (
                <SHOP
                  url={shoe.url}
                  title={shoe.title}
                  content={shoe.content}
                  price={shoe.price}
                />
              );
            })}
            {/* <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
            <h4> {shoes[0].title}</h4>
            <p>
              {shoes[0].content} {shoes[0].price}
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
            />
            <h4> {shoes[1].title}</h4>
            <p>
              {shoes[1].content} {shoes[1].price}
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
            />
            <h4> {shoes[2].title}</h4>
            <p>
              {shoes[2].content} {shoes[2].price}
            </p>
          </div> */}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              // fetch(url).then  이건 json object으로 바꿔주지 않는다

              axios
                .get("https://codingapple1.github.io/shop/data2.json") //서버한테 get 요청
                .then((result) => {
                  //성공
                  console.log("성공했어요");
                  console.log(result); //성공한 것에 대한 데이터
                  console.log(result.data);
                })
                .catch(() => {
                  console.log("실패했어요");
                }); //실패시
            }}
          >
            더보기
          </button>
        </div>
      </Route>
      {/* <Route path="/어쩌구" component={Modal}></Route> */}
    </div>
  );
}

function SHOP(prop) {
  //component
  return (
    <div className="col-md-4">
      <img src={prop.url} width="100%" />
      <h4> {prop.title}</h4>
      <p>
        {prop.content} {prop.price}
      </p>
    </div>
  );
}

export default App;
