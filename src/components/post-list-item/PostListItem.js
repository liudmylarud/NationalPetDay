import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

import CustomSpinner from "../custom-spinner/CustomSpinner";

import './listItemStyle.css';

const PostListItem = ({posts}) => {

    if (!posts) return (
        <div>
            <CustomSpinner/>
        </div>
    );

    return (
        <div className='row'>
            {
                posts.map(({id, title, description, user_name, date, readingTime}) => {
                    return (

                            <div className="dws-wrapper col col-lg-12 col-md-12 col-sm-12" key={id}>
                                <div className='box'>
                                    <div className='in-box'>
                                        <div className='text-center item1'>{
                                            title.length > 50 ? `${title.substring(0, 50)}...`: title
                                        }</div>
                                        <div className='item2'>{user_name}</div>
                                        <div className='item3'>{date}</div>
                                        <div className='item4'>Time to read {readingTime}</div>
                                        <div className='ml-2 mr-2 item5'>{
                                            description.length > 300 ? `${description.substring(0, 300)}...`: description}
                                        </div>

                                    </div>
                                    <div className="dws-text">
                                        <Link to={`/post-detail/${id}`}>
                                            <Button variant="dark">post detail...</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                    );
                })
            }
        </div>
    );
};

export default PostListItem;

















