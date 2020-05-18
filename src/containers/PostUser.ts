const POST_URL = "http://18.219.43.178/create_user";
export const createUser = async (
  username: String,
  password: String,
  bio: String
) => {
  let formBodyArray = [];
  formBodyArray.push(`user_name=${username}`);
  formBodyArray.push(`user_bio=${bio}`);
  formBodyArray.push(`user_password=${password}`);
  let formBody = formBodyArray.join("&");

  let data = await fetch(POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "no-cors",
    body: formBody,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
