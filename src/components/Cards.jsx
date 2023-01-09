import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Cards.css';
import univ from '../images/i1.png';
import port from '../images/i2.png';
const Cards = () => {
  // const navigate = useNavigate();
  // function goToPortofoliu() {
  //   navigate('/portofoliu');
  // }
  // function goToUniversitate() {
  //   navigate('/universitate');
  // }
  return (
    <Container className='content-container'>
      <Row>
        <Col>
          <Card className='card-content'>
            <Card.Img id='card-img' src={port} alt='poza-portofoliu' />
            <Card.Body>
              <Card.Title>Protofuliul Elevului</Card.Title>
              <Card.Text>Creaza-ti propriul portofoliu</Card.Text>
              {/* <Button onClick={goToPortofoliu}>Adauga Portofoliu</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-content'>
            <Card.Img id='card-img' src={univ} alt='poza-cariera' />
            <Card.Body>
              <Card.Title>Consiliere alegere Universitate</Card.Title>
              <Card.Text>Raspunde la cateva intrebari!</Card.Text>
              {/* <Button onClick={goToUniversitate}>Universitate</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Cards;
