import { useState } from "react";

const POST_URL = "http://18.219.43.178/create_user";
const GET_URL = "http://18.219.43.178/get_user_by_name/";

export const getUserByNameService = async (
  username: String,
  password: String
) => {
  if (username != "" || username != null) {
    const composedURL = `${GET_URL}${username}`;

    let data = await fetch(composedURL, { method: "GET", mode: "cors" })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));

    return await data;
  }
};

export const createUserService = async (
  username: String,
  password: String,
  bio: String
) => {
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
  let localResponse: boolean = false;

  let data = await fetch(POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "no-cors",
    body: formBody,
  })
    .then((response) => console.log(response.json()))
    .catch((error) => console.log(error));

  // let receivedData = await data;
  //return receivedData;
};
