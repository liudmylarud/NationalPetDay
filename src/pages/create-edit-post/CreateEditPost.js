import React, {useState, useEffect} from 'react';
import get from 'lodash/get';
import {connect} from 'react-redux';
import {selectPost} from "../../selectors/postsSelector";
import {
    getPostActionCreator,
    addPostActionCreator,
    editPostActionCreator
} from "../../redux/actionCreators/postsActionCreators";
import {Form} from 'react-bootstrap';
import {getUser} from "../../helpers/common";
import ButtonU from "../../components/button/ButtonU";
import Input from "../../components/input/Input";
import TextArea from "../../components/input/TextArea";
import Time from "../../components/input/Time";
import {useHistory} from "react-router";
import Alert from "../../components/alert/Alert";

const CreateEditPost = ({addPost, editPost, postId, getPost, post}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const ID = getUser();



    const history = useHistory();

    useEffect(() => {
        if (postId) {
            getPost(postId);
        }
    }, [getPost, postId]);


    const handleSubmit = () => {
        if (!title || !description) setError('invalid data');
        else {
            if (postId) {
                setVisibleEdit(true);
                editPost({
                    title,
                    description,
                    userID: ID,
                    user_name: localStorage.getItem('username'),
                    date,
                    readingTime: time
                }, postId);
            } else {
                setVisibleAdd(true);
                addPost({
                    title,
                    description,
                    date,
                    readingTime: time,
                    id: Date.now(),
                    userID: ID,
                    user_name: localStorage.getItem('username')
                });
            }
            setTitle('');
            setDescription('');
            setDate('');
            setTime('');
            setError('');
            setTimeout(() =>  history.push('/my-page'), 1500);
        }
    };

    return (
        <div className='container'>
            <Form>
                {error ? <p style={{color: 'red', fontSize: '20px'}}>{error}</p> : null}
                <div className='pt-4'>
                    {visibleAdd ? <Alert text='Added successfully'/> : null}
                </div>
                <div className='pt-4'>
                    {visibleEdit ? <Alert text='Edited successfully'/> : null}
                </div>

                <Input
                    controlId='forTitle'
                    label='Title'
                    type='text'
                    placeholder={post.title}
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                <div className='d-flex flex-nowrap'>
                    <div className='col-lg-7'>
                        <TextArea
                            controlId='forDescription'
                            label='Description'
                            type='text'
                            placeholder={post.description}
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            rows={20}
                            cols={40}
                        />
                    </div>
                    <div className='col-lg-5 mt-3'>
                        <div>
                            <Input
                                controlId='forDate'
                                label='Date'
                                type='date'
                                onChange={e => setDate(e.target.value)}
                                value={date}
                            />
                        </div>
                        <div>
                            <Time
                                controlId='forTime'
                                label='Time to read'
                                type="time"
                                step='1'
                                min="00:00:00"
                                max="20:00:00"
                                onChange={e => setTime(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-nowrap'>
                    <div className='col-6 text-center'>
                        <ButtonU clazz='green'
                                 type='button'
                                 onClick={() => history.push('/my-page')}>
                            {'Back home'}
                        </ButtonU>
                    </div>
                    <div className='col-6 text-center'>
                        <ButtonU type='button'
                                 clazz='pink'
                                 onClick={handleSubmit}>{postId ? 'Edit Post' : 'Add Post'}
                        </ButtonU>
                    </div>
                </div>

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