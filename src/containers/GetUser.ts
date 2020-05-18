const GET_URL = "http://18.219.43.178/get_user_by_name/";
/**
 * User type decomposition parameters
 *
 */
export const USER_ID = "user_id";
export const USER_NAME = "user_name";
export const USER_PASSWORD = "user_password";
export const USER_BIO = "user_bio";
export const USER_FRIENDS = "user_friends";
export const USER_CONVERSATIONS = "user_conversations";

export const getUserByName = async (username: String) => {
  if (username != "" || username != null) {
    const composedURL = `${GET_URL}${username}`;

    let data = await fetch(composedURL, { method: "GET", mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));

    return await data;
  }
};
