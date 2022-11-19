import React from 'react';
import './TopHeader.css';
import iconita1 from '../images/IconitaLiceu.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
const TopHeader = () => {
  return (
    <>
      <Container id='header-top'>
        <Row>
          <Col>
            <div className='iconita'>
              <img className='img1' src={iconita1} alt='Imagine_liceu' />
            </div>
          </Col>
          <Col>
            <div className='titlu'>
              <h3>
                Colegiul Tehnic{' '}
                <span>
                  <h2>Edmond Nicolau</h2>
                </span>
              </h3>
            </div>
          </Col>
          <Col>
            <Navbar variant='light'>
              {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
              <Nav className='me-auto'>
                <Nav.Link href='#protofoliu'>Protofoliu</Nav.Link>
                <Nav.Link href='#consiliere'>Consiliere</Nav.Link>
                <Nav.Link href='#'>Contact</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TopHeader;
