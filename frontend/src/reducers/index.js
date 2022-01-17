import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from './users.reducer.js'
import postReducer from "./post.reducer";

export default combineReducers({
    userReducer,
    usersReducer,
    postReducer
})