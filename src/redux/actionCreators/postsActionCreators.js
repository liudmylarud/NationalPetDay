import {post, get, deleteApi, put} from '../../api/Api';
import {
    GET_POST,
    GET_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST, SET_ACTIVE_PAGE
} from '../actionTypes/postsActionTypes';

const url = 'http://localhost:3002/posts';

export const getPostsActionCreator = () => ({type: GET_POSTS, payload: get(`${url}`)});
export const getPostActionCreator = (id) => ({type: GET_POST, payload: get(`${url}/${id}`)});
export const addPostActionCreator = (body) => ({type: ADD_POST, payload: post(`${url}`, body)});
export const editPostActionCreator = (body, id) => ({type: EDIT_POST, payload: put(`${url}/${id}`, {...body, id})});
export const deletePostActionCreator = (id) => ({type: DELETE_POST, payload: deleteApi(`${url}/${id}`, id)});

export const setActivePage = (activePage) => ({ type: SET_ACTIVE_PAGE, payload: activePage });