import axios from 'axios';
import {removeUserSession} from "../helpers/common";

export const get = (url) => {
    return axios.get(url)
        .then(res => res.data)
        .catch(err => err);
};

export const loginApi = async (url, body) => {
    const users = await axios.get(url)
        .then(res => res.data)
        .then(res => res)
        .catch(err => err);
    const user = users.find(({email}) => email === body.email);
    if(!user) {
        removeUserSession();
        return null;
    }else{
        localStorage.setItem('id', user.id);
        localStorage.setItem('username', user.name);
        return user;
    }

};

export const post = (ulr, body) => {
    return axios.post(ulr, body)
        .then(() => body)
        .catch(err => err);
};

export const deleteApi = (ulr, id) => {
    return axios.delete(ulr)
        .then(() => id)
        .catch(err => err);
};

export const put = (ulr, body) => {
    return axios.put(ulr, body)
        .then(() => body)
        .catch(err => err);
};
