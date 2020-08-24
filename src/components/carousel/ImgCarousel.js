import React from "react";
import {Carousel, Container} from 'react-bootstrap';


const ImgCarousel = () => {

    return (
        <Container className='container'>

            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://99px.ru/sstorage/53/2015/01/tmb_119927_3984.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={'https://99px.ru/sstorage/53/2013/06/tmb_72365_8478.jpg'}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://image.freepik.com/free-photo/close-up-of-green-cactus-on-black-isolated_45463-467.jpg'}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default ImgCarousel;