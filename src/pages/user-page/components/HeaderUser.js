import React from 'react';
import {Row, Col} from "react-bootstrap";
import '../components/style-header.css'
import {removeUserSession} from "../../../helpers/common";
import {useHistory} from "react-router";
import ButtonU from "../../../components/button/ButtonU";

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
                <a href={'/create-post'}>
                    <ButtonU type='button'
                             clazz='pink'>
                        Add post
                    </ButtonU>
                </a>
                <ButtonU type="button"
                         onClick={handleRemoveSession}
                         clazz='green'>
                    Log out
                </ButtonU>
            </Row>

            <Row className='my-post bg-dark text-white align-center p-3'>
                <u> All my post </u>
            </Row>

        </>

    );
};

export default HeaderUser;