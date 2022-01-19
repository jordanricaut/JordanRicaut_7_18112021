import {
  GET_USER,
  GET_USER_INFO,
  UPDATE_PROFIL,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case GET_USER_INFO:
      return action.payload;
    case UPDATE_PROFIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
