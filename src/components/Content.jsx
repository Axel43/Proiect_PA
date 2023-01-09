import React from 'react';
import border from '../images/heading_main_border.png';
import './Content.css';
import ContentIcon from '../images/IconitaContent.jpg';
import { Container, Row, Col } from 'react-bootstrap';
const Content = () => {
  return (
    <Container className='full'>
      <Row>
        <Col>
          <h2>
            <span>Welcome To</span> Education
          </h2>
          <img id='img-border' src={border} alt='border' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Col>
        <Col>
          <img id='img-content' src={ContentIcon} alt='IMAGINE' />
        </Col>
      </Row>
    </Container>
  );
};
export default Content;
