import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
const Contact = () => {
  return (
    <>
      <Container>
        <Row style={{ paddingTop: '40px' }}>
          <Col>
            <p> Email:  edmond.nicolau@yahoo.com</p>
            <p> Telefon:  0337 401 160</p>
            <p> Adresa:  Focșani Str. 1 Decembrie 1918, nr.10</p>
          </Col>
          <Col>AICI MAPS</Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
