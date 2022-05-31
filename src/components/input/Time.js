import React from 'react';
import {Form} from "react-bootstrap";

const Time = ({controlId, step, min, max, type, label, onChange}) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label className="mt-3">{label}</Form.Label>
            <Form.Control
                type={type}
                step={step}
                min={min}
                max={max}
                onChange={onChange}
            />
        </Form.Group>
    );
};

export default Time;

