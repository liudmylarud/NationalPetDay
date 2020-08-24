import {
    LOGIN_USER_FULFILLED,
    LOGIN_USER_PENDING,
    LOGIN_USER_REJECTED, REGISTER_USER_FULFILLED, REGISTER_USER_PENDING, REGISTER_USER_REJECTED,
} from "../actionTypes/usersActionTypes";

const initialState = {
    users: {},
    loading: false,
    error: false,
};


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case REGISTER_USER_PENDING: return {...state, loading: true};
        case REGISTER_USER_FULFILLED: return {...state, loading: false, users: [...state.users, payload]};
        case REGISTER_USER_REJECTED: return { ...state, loading: false, error: true };

        case LOGIN_USER_PENDING: return {...state};
        case LOGIN_USER_REJECTED: return {...state};
        case LOGIN_USER_FULFILLED: return {users: payload};
        default:
            return state;
    }
};