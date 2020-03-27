import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./index";
import axiosWithAuth from "../utils/axiosWithAuth";

const login = (user, history) => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/auth/login", user)
    .then(res => {
      // console.log(res);
      localStorage.setItem("token", res.data);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push("/jokes");
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export default login;
