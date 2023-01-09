import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideShow1 from '../images/SlideShow1.jpg';
import SlideShow2 from '../images/SlideShow2.jpg';
import SlideShow3 from '../images/SlideShow3.jpg';
import './SlideShow.css';
import { Carousel } from 'react-bootstrap';
const SlideShow = () => {
  return (
    <Carousel className ='carusel'>
      <Carousel.Item>
        <img
          className="img-slide"
          src={SlideShow1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-slide"
          src={SlideShow2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-slide"
          src={SlideShow3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default SlideShow;
