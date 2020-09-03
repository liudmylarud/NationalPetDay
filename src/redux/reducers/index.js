import { combineReducers } from 'redux';

import postReducer from './postReducer';
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import galleryReducer from "./galleryReducer";

export default combineReducers({
  postReducer,
  userReducer,
  searchReducer,
  galleryReducer,
});
