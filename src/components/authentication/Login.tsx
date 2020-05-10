import React, { useState, useEffect } from "react";
import "../../styles/Login/Login.css";
const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [bio, setBio] = useState("");

  const usernameOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.currentTarget.value);
  const passwordOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.currentTarget.value);
  const bioOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBio(event.currentTarget.value);

  const submitHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let details = {
      username: username,
      bio: bio,
      password: password,
    };

    let formBodyArray = [];
    formBodyArray.push(`user_name=${details.username}`);
    formBodyArray.push(`user_bio=${details.bio}`);
    formBodyArray.push(`user_password=${details.password}`);

    let formBody = formBodyArray.join("&");

    fetch("http://18.219.43.178/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "no-cors",
      body: formBody,
    }).catch((error) => console.log(error));
  };

  return (
    <div className="container login-container">
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
          <label>Bio</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your bio"
            onChange={bioOnChange}
          />
          <small className="form-text text-muted">Only for sign in!</small>
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
};

export default Login;
