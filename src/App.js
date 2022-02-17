/*eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import shoesDate from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail.js";
import axios from "axios";

function App() {
  // 중요한 데이터는 꼭 여기다가 넣어야 함(최상위 컴포넌트)

  let [shoes, shoes변경] = useState(shoesDate);
  let [trueFalse, trueFalse변경] = useState(true);
  let [num, num변경] = useState(1);
  console.log(shoes);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail/0">
                detail
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        <Route path="/:id">
          <div>아이디 연습</div>
        </Route>
        <Route path="/">
          <div className="text-center jumbotron bg-image">
            <h1>20% 세일</h1>
            <p>
              얼른끝내고 학교가서 할껍니다
              ㅁㄴ옴냐ㅣ우뱆움니위ㅓ뮘누임ㄴ워미누디무니우민ㅇ
            </p>
            <p>
              <Button variant="primary" className="btn-width">
                강의들으러 가기
              </Button>
            </p>
          </div>
          <div className="container text-center">
            <div className="row">
              {shoes.map((item, i) => {
                return (
                  <Card
                    shoes변경={shoes변경}
                    shoes={shoes[i]}
                    i={i}
                    key={i}
                  ></Card>
                );
              })}
            </div>
            <Button
              variant="secondary"
              onClick={() => {
                trueFalse변경(!trueFalse);
                trueFalse == true ? <Loding /> : null;
                num변경 = num + 1;
                console.log(
                  "https://codingapple1.github.io/shop/data" + num + ".json"
                );
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  // .get(
                  //   "https://codingapple1.github.io/shop/data" + num + ".json"
                  // )

                  .then((data) => {
                    console.log(data.data);
                    // let array = [...shoes];
                    // array.push(...data.data);
                    // shoes변경(array);

                    shoes변경([...shoes, ...data.data]);
                  })
                  .catch(() => {
                    <div>dd</div>;
                  });
              }}
            >
              더보기
            </Button>{" "}
          </div>
        </Route>
      </Switch>
    </div>
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width={"100%"}
      ></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}
function Loding() {
  return <div>로딩중입니다 ..</div>;
}
export default App;
