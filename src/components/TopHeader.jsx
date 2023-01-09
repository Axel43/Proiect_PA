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
                Colegiul Tehnic
                <span>
                  <h2>Edmond Nicolau</h2>
                </span>
              </h3>
            </div>
          </Col>
          <Col>
            <Navbar variant='light' expand='lg'>
              <Nav className='justify-content-end' activeKey='/home'>
                <Nav.Item>
                  <Nav.Link className='navlink' href='/'>
                    <h4>Acasa</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='navlink' href='/portofoliu'>
                    <h4>Portofoliu</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='navlink' href='/universitate'>
                    <h4>Universitate</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='navlink' href='/contact'>
                    <h4>Contact</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TopHeader;
