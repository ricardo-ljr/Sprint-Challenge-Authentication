import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import userRegister from "../actions/userRegister";
import { connect } from "react-redux";

const Register = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setUser({
      username: "",
      password: ""
    });

    props.history.push("/login");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <br />
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
          Sign Up
        </Button>
      </form>
      <br />
      Already have an account, <Link to="/login">Log In</Link>
    </div>
  );
};

export default connect(null, { userRegister })(Register);
