import {
  GET_ONE_POST,
} from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_POST:
      return action.payload;
    default:
      return state;
  }
}
