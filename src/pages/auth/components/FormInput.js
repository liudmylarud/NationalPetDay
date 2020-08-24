import React from 'react';
import {Form} from "react-bootstrap";

const FormInput = ({id, title, type, placeholder, value, onChange}) => {
    return (
        <Form.Group controlId={id}>
            <Form.Label>{title}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </Form.Group>
    );
};

export default FormInput;