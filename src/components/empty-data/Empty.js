import React from 'react';
import empty from '../../images/empty.jpg'

function Empty(props) {
    return (
        <div className='text-center mt-5'>
            <img className='w-25 mb-3' src={empty} alt='no_data'/>
            <h3> ERROR 404 </h3>
        </div>
    );
}

export default Empty;