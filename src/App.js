import "./App.css";
import About from "./components/About";
import Checkout from "./components/Checkout";
import Main from "./components/Main";
import Products from "./components/Products";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <div className="hero-text mainTitle">
          <h1>Welcome to Hollywood Classic Films!</h1>
        </div>
        <p>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#checkout">Checkout</a>
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About</Accordion.Header>
            <Accordion.Body>
              <About />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Main</Accordion.Header>
            <Accordion.Body>
              <Main />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Products</Accordion.Header>
            <Accordion.Body>
              <Products />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Checkout</Accordion.Header>
            <Accordion.Body>
              <Checkout />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default App;
