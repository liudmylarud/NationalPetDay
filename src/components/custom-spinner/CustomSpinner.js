import React from 'react';
import {Spinner} from "react-bootstrap";

const CustomSpinner = () => {
    return (
        <div className='text-center justify-content-center'>
            <Spinner animation="border" role="status">
                <div className="sr-only">Loading...</div>
            </Spinner>
        </div>
    );
};

export default CustomSpinner;