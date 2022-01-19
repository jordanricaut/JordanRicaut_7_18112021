import axios from "axios";

export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER = "GET_USER";
export const UPDATE_PROFIL = "UPDATE_PROFIL";


export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getUserInfo = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/data/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER_INFO, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateProfil = (userId, email) => {
  return (dispatch) => {
    return axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
      data: {
        email: email
      }
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_PROFIL, payload: email });
      })
      .catch((err) => console.log(err));
  };
};