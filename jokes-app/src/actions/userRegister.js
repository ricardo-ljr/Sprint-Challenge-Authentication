import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from "./index";

import axiosWithAuth from "../utils/axiosWithAuth";

const register = user => dispatch => {
  console.log("I am coming from action: ");
  dispatch({ type: REGISTER_START });
  return axiosWithAuth()
    .post("/auth/register", user)
    .then(res => {
      console.log("I am registered", res);
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log("You failed to register me", err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export default register;
