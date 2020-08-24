import {
  ADD_POST_FULFILLED,
  ADD_POST_PENDING,
  ADD_POST_REJECTED,
  DELETE_POST_FULFILLED,
  DELETE_POST_PENDING,
  DELETE_POST_REJECTED, EDIT_POST_FULFILLED, EDIT_POST_PENDING, EDIT_POST_REJECTED,
  GET_POST_FULFILLED,
  GET_POST_PENDING,
  GET_POST_REJECTED,
  GET_POSTS_FULFILLED,
  GET_POSTS_PENDING,
  GET_POSTS_REJECTED, SET_ACTIVE_PAGE
} from "../actionTypes/postsActionTypes";


const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: false,
  currentPage: 1
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS_PENDING: return { ...state, loading: true };
    case GET_POSTS_FULFILLED: return { ...state, loading: false, posts: payload };
    case GET_POSTS_REJECTED: return { ...state, loading: false, error: true };

    case GET_POST_PENDING: return { ...state, loading: true };
    case GET_POST_FULFILLED: return { ...state, loading: false, post: payload };
    case GET_POST_REJECTED: return { ...state, loading: false, error: true };

    case ADD_POST_PENDING: return { ...state, loading: true };
    case ADD_POST_FULFILLED: return { ...state, loading: false, posts: [ ...state.posts, payload ] };
    case ADD_POST_REJECTED: return { ...state, loading: false, error: true };

    case DELETE_POST_PENDING: return { ...state, loading: true };
    case DELETE_POST_FULFILLED: return {...state, loading: false, posts: [ ...state.posts.filter(({id}) => payload !== id) ],};
    case DELETE_POST_REJECTED: return { ...state, loading: false, error: true };

    case EDIT_POST_PENDING: return {...state, loading: true};
    case EDIT_POST_FULFILLED: return {...state, loading: false, posts: [
        state.posts.map((item) => {
            if(payload.id === item.id){
              return {
                ...item,
                title: payload.title,
                description:payload.description
              }
            }else {
              return item;
            }
          })
      ] };
    case EDIT_POST_REJECTED: return {...state, loading: false, error: true};

    case SET_ACTIVE_PAGE: return {...state, currentPage: payload};

    default:
      return state;
  }
}
