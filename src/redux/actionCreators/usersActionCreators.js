import {LOGIN_USER, REGISTER_USER} from "../actionTypes/usersActionTypes";
import {loginApi, post} from "../../api/Api";

const url = 'http://localhost:3001/users';

export const registerUser = (body) => ({type: REGISTER_USER, payload: post(url, body)});
export const loginUser = (body) => ({type: LOGIN_USER, payload: loginApi(`${url}`, body)});

