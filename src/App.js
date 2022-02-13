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

function App() {
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
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
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width={"100%"}
            ></img>
            <h4>상품명</h4>
            <p>상품설명 및 가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width={"100%"}
            ></img>
            <h4>상품명</h4>
            <p>상품설명 및 가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width={"100%"}
            ></img>
            <h4>상품명</h4>
            <p>상품설명 및 가격</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
