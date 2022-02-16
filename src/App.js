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

function App() {
  // 중요한 데이터는 꼭 여기다가 넣어야 함(최상위 컴포넌트)

  let [shoes, shoes변경] = useState(shoesDate);
  console.log(shoes);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">detail</Link>
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

export default App;
