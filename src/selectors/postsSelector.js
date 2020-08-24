import {getUser} from "../helpers/common";

export const selectPosts = (state) => state.postReducer.posts;
export const selectPost = (state) => state.postReducer.post;
export const selectUserPosts = (state) => {
    return selectPosts(state).filter(({userID}) => {
        return userID || +userID === +getUser()
    });
};

export const currentPage = (state) => state.postReducer.currentPage - 1;
export const currentPosts = (state) => {
    const currPage = currentPage(state);
    return selectPosts(state).slice(currPage*5, currPage*5+5);
};

export const selectCurrentUserPosts = (state) => {
    const userPosts = selectUserPosts(state);
    const currPage = currentPage(state);
    return userPosts.slice(currPage*5, currPage*5+5);
};
