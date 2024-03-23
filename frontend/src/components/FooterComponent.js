import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
        <Col className="bg-secondary  text-white text-center py-5">'Happy Shoping; Best Quality Products.'</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;