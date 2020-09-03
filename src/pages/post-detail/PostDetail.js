import React, {useEffect, useState} from 'react';
import get from "lodash/get";
import {connect} from 'react-redux';
import {getUser} from "../../helpers/common";
import CustomSpinner from "../../components/custom-spinner/CustomSpinner";
import {Link} from "react-router-dom";
import {selectPost} from "../../selectors/postsSelector";
import {
    getPostActionCreator,
    deletePostActionCreator,
} from "../../redux/actionCreators/postsActionCreators";
import {useHistory} from "react-router";
import './postDetail.css';
import ButtonU from "../../components/button/ButtonU";
import Alert from "../../components/alert/Alert";

const PostDetail = ({post, postId, getPost, deletePost}) => {

        const history = useHistory();

        useEffect(() => {
            if (postId) {
                getPost(postId);
            }
        }, [getPost, postId]);

        const [visible, setVisible] = useState(false);

        if (!post) {
            return (
                <div>
                    <CustomSpinner/>
                </div>
            )
        }
        const handleDelete = (id) => {
            setVisible(true);
            deletePost(id);
            setTimeout(() =>  history.push('/my-page'), 1500);
        };


        return (
            <div className='pb-5'>
                <div className='container'>
                    <div className='pt-4'>
                        {visible ? <Alert text='Deleted successfully'/> : null}
                    </div>
                    <div className='row justify-content-center mt-2 post-detail-title'>
                        <div className='p-5'>{post.title}</div>
                    </div>
                    <div className='row'>
                        <div className='col-6 d-flex align-items-center'>
                            <Link to={`/`}>
                                <ButtonU children='Back' type='button' clazz='pink'/>
                            </Link>
                        </div>

                        <div className=' col-6 text-right pt-3 pb-3'>
                            <div className='col col-12'>{post.user_name}</div>
                            <div className='col col-12'>{post.date}</div>
                            <div className='col col-12'>Time to read {post.readingTime}</div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col col-12 pb-5 text-justify'>{post.description}</div>
                    </div>
                </div>
                <div>
                    {
                        getUser() ?
                            <div className='row'>
                                {
                                    +getUser() === +post.userID ? <>
                                            <div className='col col-6 text-center'>
                                                <Link to={`/edit-post/${postId}`}>
                                                    <ButtonU children='Edit post' type='button' clazz='pink'/>
                                                </Link>
                                            </div>
                                            <div className='col col-6 text-center'>
                                                <ButtonU
                                                    type='button'
                                                    onClick={() => handleDelete(postId)}
                                                    children='Delete post'
                                                    clazz='green'
                                                />
                                            </div>
                                        </>
                                        : null
                                }
                            </div>
                            : null
                    }
                </div>
                <hr/>
            </div>
        );
    }
;

const mapStateToProps = (state, {match}) => {
    return {
        postId: get(match, ['params', 'id'], null),
        post: selectPost(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    getPost: (id) => dispatch(getPostActionCreator(id)),
    deletePost: (id) => dispatch(deletePostActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);