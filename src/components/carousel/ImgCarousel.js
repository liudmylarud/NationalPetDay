import React from "react";
import {Carousel, Container} from 'react-bootstrap';
import cactus2 from '../../images/cactus2.jfif';
import cactus3 from '../../images/cactus3.jfif';

const ImgCarousel = () => {

    return (
        <Container className='container'>

            <Carousel>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block w-100"
                        src={cactus2}
                        alt="First slide"
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>title</h3>*/}
                    {/*    <p>Some text</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block w-100"
                        src={'https://lh3.googleusercontent.com/proxy/uijlHoawtfHx32N1WdJu4Z3bJaK_ZMXj_Ol8-HwZANUgNZxtNmv82MJ9umvYr6ENJKuErEgYEvDPO--RRwILi28GPfNybmhN5RI1xEVb0-OOkPAPUBxBI4covxtXgKvJQm80jbwzeKh39_QtvLlUSCqjej7iFbvkuUFhdko7Lx3tglJIPvU3sYY9mHXe6XezFtll8xchM42XedzRzVYzC-uy'}
                        alt="Third slide"
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>title</h3>*/}
                    {/*    <p>Some text</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block w-100"
                        src={cactus3}
                        alt="Third slide"
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>title</h3>*/}
                    {/*    <p>Some text</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default ImgCarousel;