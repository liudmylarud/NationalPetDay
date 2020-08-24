import React, {useState, useEffect} from 'react';
import get from 'lodash/get';
import {connect} from 'react-redux';
import {selectPost, selectUsers} from "../../selectors/postsSelector";
import {getPostActionCreator, addPostActionCreator, editPostActionCreator} from "../../redux/actionCreators/postsActionCreators";
import {Form, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {getUser, getUserName} from "../../helpers/common";

const CreateEditPost = ({addPost, editPost, postId, getPost, post}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const ID = getUser();


    useEffect(() => {
        if (postId) {
            getPost(postId);
        }
    }, []);

    const handleSubmit = () => {
        if (!title || !description) setError('invalid data');
        else {
            if (postId) {
                editPost({title, description,  userID: ID, user_name: localStorage.getItem('user_name')}, postId);
            } else {
                addPost({title, description, id: Date.now(), userID: ID, user_name: localStorage.getItem('user_name')});
            }
            setTitle('');
            setDescription('');
            setError('');
        }
    };

    return (
        <div className='container'>
            <Form>
                {error ? <p style={{color: 'red', fontSize: '20px'}}>{error}</p> : null}
                <Form.Group controlId='forTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={post.title}
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </Form.Group>

                <Form.Group controlId='forDescription'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea"
                                  type="text"
                                  placeholder={post.description}
                                  onChange={e => setDescription(e.target.value)}
                                  value={description}
                                  rows={20}
                                  cols={40}
                    />
                </Form.Group>
                <Button variant='light'>
                    <Link to='/my-page'>
                        {'<- Back home'}
                    </Link>
                </Button>

                <Button onClick={handleSubmit} variant='primary'>{postId ? 'Edit Post' : 'Add Post'}</Button>


            </Form>
        </div>

    );
};

const mapStateToProps = (state, {match}) => {
    return {
        postId: get(match, ['params', 'id'], null),
        post: selectPost(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    addPost: (body) => dispatch(addPostActionCreator(body)),
    getPost: (id) => dispatch(getPostActionCreator(id)),
    editPost: (body, id) => dispatch(editPostActionCreator(body, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditPost);