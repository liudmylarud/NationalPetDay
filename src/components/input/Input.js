import React from 'react';
import './inputStyle.css';

const Input = ({controlId, onChange, value, type, placeholder, label}) => {
    return (

        <div className='form-input' >
            <label htmlFor={controlId}>
                {label}
            </label>
            <input className='form-control'
                   placeholder={placeholder}
                   type={type}
                   onChange={onChange}
                   value={value}/>
        </div>

    );
};

export default Input;
