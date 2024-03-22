import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterComponent = () => {

    return (

        <Container fluid>
      <Row className='mt-5'>
        <Col className="bg-secondary  text-white text-center py-5">'Happy Shoping; Best Quality Products.'</Col>
      </Row>
    </Container>

        
    );
};

export default FooterComponent;