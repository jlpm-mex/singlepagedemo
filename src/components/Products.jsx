import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = () => {
  return (
    <>
      <Row>
        <Col id="products">
          <h2>Products</h2>
        </Col>
      </Row>
      <Row>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-50 m-auto"
              src={require("../assets/rebel.jpg")}
              alt="rebel without a cause"
            />
            <Carousel.Caption>
              <h3 style={{backgroundColor:'white'}}>Rebel</h3>
              <p style={{backgroundColor:'white'}}>rebel without a cause</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 m-auto"
              src={require("../assets/godzilla.jpg")}
            />
            <Carousel.Caption>
              <h3 style={{backgroundColor:'white'}}>Godzilla</h3>
              <p style={{backgroundColor:'white'}}>King of the monsters</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 m-auto"
              src={require("../assets/the-400-blows-1959.jpg")}
            />
            <Carousel.Caption>
              <h3 style={{backgroundColor:'white'}}>blows</h3>
              <p style={{backgroundColor:'white'}}>Prix de la Meilleure mise en escene</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 m-auto"
              src={require("../assets/busstop.jpg")}
            />
                <Carousel.Caption>
                    <h3 style={{backgroundColor:'white'}}>Bus stop</h3>
                    <p style={{backgroundColor:'white'}}>Cinema Scope</p>
                </Carousel.Caption>    
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
};

export default Products;
