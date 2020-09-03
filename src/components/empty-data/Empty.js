import React from 'react';
import empty from '../../images/emptyVovk.jpg'

function Empty(props) {
    return (
        <div className='text-center mt-5'>
            <img src={empty} alt='there is no data'/>
            <h3> There is no data ... </h3>
        </div>
    );
}

export default Empty;