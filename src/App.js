import React from 'react';
import {Container} from "react-bootstrap";

import Routes from "./Routes";
import NavMenu from "./components/nav-menu/NavMenu";

const App = () => {
    return (
        <>
            <NavMenu/>
            <Container>
                <Routes/>
            </Container>

        </>
    );
};

export default App;