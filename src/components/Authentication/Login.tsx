import React, { useState, useEffect } from "react";
import "../../styles/Login/Login.css";
import {
  createUserService,
  getUserByNameService,
} from "../../containers/AuthenticationService";

export interface LoginProps {
  authHandler: Function;
}

const Login = (data: LoginProps) => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [bio, setBio] = useState("");
  let [hasAccount, setHasAccount] = useState(true);

  const usernameOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.currentTarget.value);

  const passwordOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.currentTarget.value);

  const bioOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBio(event.currentTarget.value);

  const hasAccountHandle = () => {
    if (hasAccount == true) setHasAccount(false);
    else setHasAccount(true);
  };

  const submitHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (hasAccount) {
      const userData = await getUserByNameService(username, password);
      console.log(userData["user_password"]);
    } else {
      let response = await createUserService(username, password, bio);
      console.log(response);
    }
  };

  const LoginScreen = () => (
    <div className="container login-container">
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={hasAccountHandle}
      >
        Sign up
      </button>
      <hr />
      <br />
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={usernameOnChange}
          />
          <small className="form-text text-muted">
            If you don't have an account just type a new username and password
            and create one!
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={passwordOnChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );

  const SignUpScreen = () => (
    <div className="container login-container">
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={hasAccountHandle}
      >
        Back
      </button>
      <hr />
      <br />
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={usernameOnChange}
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your bio"
            onChange={bioOnChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={passwordOnChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );

  return (
    <div className="container">
      {hasAccount === true ? LoginScreen() : SignUpScreen()}
    </div>
  );
};

export default Login;
