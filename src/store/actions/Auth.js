import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, pass, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: pass,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6pJPOHh45uNS20JHQyNye6UEiA1MdoeI";

    if (isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6pJPOHh45uNS20JHQyNye6UEiA1MdoeI";
    }

    axios
      .post(url, authData)
      .then((response) => {
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};
