import React from "react";
import {Carousel, Container} from 'react-bootstrap';
import pet0 from '../../images/pet0.jpg';
import pet1 from '../../images/pet1.jpg';
import pet2 from '../../images/pet2.jpg';
import pet3 from '../../images/pet3.jpg';
import pet4 from '../../images/pet4.jpg';

const textStyle = {
    background: "rgba(190,190,190, 0.4)",
}
const ImgCarousel = () => {

    return (
        <Container className={"carousell-container"}>
            <Carousel wrap={true}>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block"
                        src={pet0}
                        alt="First slide"
                    />
                    <Carousel.Caption style={textStyle}>
                        <h3>I'm Tobby</h3>
                        <p>and I have found lovely family</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block"
                        src={pet1}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={textStyle}>
                        <h3>I'm Steve</h3>
                        <p>and I will be grateful if you will donate money to the fund</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block"
                        src={pet2}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={textStyle}>
                        <h3>I'm Sappy</h3>
                        <p>and I dreaming all pets on Earth can find a home</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block"
                        src={pet3}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption style={textStyle}>
                        <h3>I'm Roberto</h3>
                        <p>and I'm a good boy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block"
                        src={pet4}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption style={textStyle}>
                        <h3>I'm Cheasy</h3>
                        <p>and my brothers and sisters need your help</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default ImgCarousel;