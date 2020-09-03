import React from 'react';
import './btnStyle.css'


const ButtonU = ({type, onClick, children, clazz}) => {

    return (
        <button type={type} className={clazz} onClick={onClick}>
            {children}
        </button>


        // <div className="button-container" onClick={onClick}>
        //         //     <div className={clazz}><button type={type}>{children}<span></span></button></div>
        //         // </div>
    );
};

export default ButtonU;