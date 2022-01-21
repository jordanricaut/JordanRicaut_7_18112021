import axios from "axios";

// Posts
export const GET_ONE_POST = "GET_ONE_POST";
export const ADD_POST = "ADD_POST"
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";


export const getOnePost = (postId) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/post/${postId}`)
      .then((res) => {
        dispatch({ type: GET_ONE_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/post/`, data)
  };
};


export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}/`,
      data: {
        message: message,
      },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { message, postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}/`,
    })
      .then((res) => {
        console.log(res);
        window.location.reload()
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
