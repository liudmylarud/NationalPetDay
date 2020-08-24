import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../components/style-header.css'
import {removeUserSession} from "../../../helpers/common";
import {useHistory} from "react-router";

const HeaderUser = () => {

    const history = useHistory();
    const handleRemoveSession = () => {
        removeUserSession();
        history.push('/');
    };

    return (
        <>
            <Row className='font-weight-bold pb-4 pt-4'>
                <Col className=" title align-middle">My profile</Col>
                <Link to={'/create-post'}>
                    <Button variant="primary" type="button">
                        Add post
                    </Button>
                </Link>
                <Button variant="primary" type="button" className='ml-2' onClick={handleRemoveSession}>
                   Log out
                </Button>
            </Row>

            <Row className='my-post bg-dark text-white align-center p-3'>
                <u> All my post </u>
            </Row>

        </>

    );
};

export default HeaderUser;