import {GET_GALLERY_FULFILLED, GET_GALLERY_PENDING, GET_GALLERY_REJECTED} from "../actionTypes/galleryActionTypes";

const initialState = {
    boxes: [],
    loading: false,
    error: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_GALLERY_PENDING: return { ...state, loading: true };
        case GET_GALLERY_FULFILLED: return { ...state, loading: false, boxes: payload };
        case GET_GALLERY_REJECTED: return { ...state, loading: false, error: true };
        default:
            return state;
    }
}
