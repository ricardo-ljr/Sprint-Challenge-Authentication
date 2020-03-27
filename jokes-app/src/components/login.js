import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import login from "../actions/userLogin";

const Login = props => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.login(loginInfo, props.history);
    setLoginInfo({
      username: "",
      password: ""
    });
  };

  return (
    <div className="entry-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Username"
          id="username"
          name="username"
          onChange={handleChange}
        />
        <br />
        <TextField
          required
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </form>
      <br />
      New to the app, <Link to="/">Sign Up</Link>
    </div>
  );
};

export default connect(null, { login })(Login);
