import React from 'react';
import {Form} from "react-bootstrap";

const TextArea = ({controlId, onChange, value, type, placeholder, label, rows, cols}) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as='textarea'
                          type={type}
                          placeholder={placeholder}
                          onChange={onChange}
                          value={value}
                          rows={rows}
                          cols={cols}
            />
        </Form.Group>
    );
};

export default TextArea;