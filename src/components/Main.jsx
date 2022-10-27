import { Row,Col } from "react-bootstrap";

const Main = () => {
  return (
    <Row>
      <Row>
        <Col>
          <h1 className="fw-light">Featured Film</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="lead text-muted">
            Each week, we feature a classic film and have an accompanying movie
            screening and Blu-Ray special. This week's is "A Streetcar Named
            Desire".
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" className="btn btn-primary my-2">
            Buy Movie Tickets
          </a>
        </Col>
        <Col>
          <a href="#" className="btn btn-secondary my-2">
            Purchase Blu-Ray
          </a>
        </Col>
      </Row>

      <Row>
        <Col className="col">
          <div className="card shadow-sm">
            <img
              src={require("../assets/streetcar.png")}
              alt="a streetcar named desire"
            />
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default Main;
