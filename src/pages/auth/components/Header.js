import {Container} from "react-bootstrap";
import React from "react";

const Header = ({title}) => {

    return (
        <Container>
            <h2 className='font-weight-bold text-center pb-3'>{title}</h2>
        </Container>
    )
};

export default Header;


