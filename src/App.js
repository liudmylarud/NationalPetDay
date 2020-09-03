import React from 'react';
import {Container} from "react-bootstrap";
import Routes from "./Routes";
import NavMenu from "./components/nav-menu/NavMenu";
import Footer from "./components/footer/Footer";

const App = () => {

    return (
        <>
            <NavMenu/>
            <Container>
                <Routes/>
            </Container>
            <Footer/>
        </>
    );
};


export default App;