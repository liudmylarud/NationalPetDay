import {getUser} from "../helpers/common";


export const selectPosts = (state) => state.postReducer.posts;
export const selectPost = (state) => state.postReducer.post;
export const countPost = (state) => selectUserPosts(state).length;


export const selectUserPosts = (state) => {
    if(!selectPosts(state).length){
        return [];
    }
   return selectPosts(state).filter(({userID}) => +userID === +getUser())
};

export const currentPage = (state) => state.postReducer.currentPage - 1;

export const currentPosts = (state) => {
    if(!selectPosts(state).length){
        return [];
    }else {
        const currPage = currentPage(state);
        return selectSearchedPost(state, selectPosts(state).slice(currPage*6, currPage*6+6));
    }
};
export const selectSearch = (state) => {
    return state.searchReducer.search;
};

export const selectSearchedPost = (state, posts) => {
    return posts.filter((item) => {
        return item.title.toLowerCase().indexOf(selectSearch(state).toLowerCase()) > -1;
    });
};

export const selectCurrentUserPosts = (state) => {
    const userPosts = selectSearchedPost(state, selectUserPosts(state));
    const currPage = currentPage(state);
    return userPosts.slice(currPage*6, currPage*6+6);
};

