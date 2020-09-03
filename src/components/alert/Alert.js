import React from 'react';

const Alert = ({text}) => {
    return (
        <div className="alert alert-success" role="alert">
            {text}
        </div>
    );
};

export default Alert;