import {SEARCH_POST} from "../actionTypes/searchActionType";

const initState = {
    search: ''
};

const searchReducer = (state = initState, action) => {
    if (action.type === SEARCH_POST) {
        return { search: action.payload};
    }
    return state;
};

export default searchReducer;