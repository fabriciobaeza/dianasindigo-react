import React from 'react';
import Image1 from '../images/hair1.png';
import Image2 from '../images/hair2.jpg';
import Image3 from '../images/hair3.jpg';
import Image4 from '../images/hair4.jpg';
import { Carousel } from 'react-bootstrap';

function HairCarousel(props) {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image1}
                    alt="First Slide"
                    width="400"
                    height="300"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Second Slide"
                    width="400"
                    height="300"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image3}
                    alt="Third Slide"
                    width="400"
                    height="300"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image4}
                    alt="Fourth Slide"
                    width="400"
                    height="300"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default HairCarousel;