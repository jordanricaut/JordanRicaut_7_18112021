import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_PROFIL = "UPDATE_PROFIL";
export const DELETE_USER = "DELETE_USER";

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

export const updateProfil = (userId, email) => {
  return (dispatch) => {
    return axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_PROFIL, payload: email });
      })
      .catch((err) => console.log(err));
  };
};