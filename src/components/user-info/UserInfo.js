import React from 'react';
import {PersonFill} from "react-bootstrap-icons";

const UserInfo = ({countPost}) => {

    const name = localStorage.getItem('username');
    return (
        <div className='d-flex flex-nowrap'>
            <div className='d-flex'>
                <div className='p-2'>
                    <PersonFill color="royalblue" size={20}/>
                </div>
                <div className='p-2'>
                    {name}
                </div>
            </div>
            <div id="userInfoCount" className='d-flex'>
                <u>
                    {`Posts : ${countPost}`}
                </u>
            </div>
        </div>
    );
};


export default UserInfo;