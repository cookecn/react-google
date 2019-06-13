import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;