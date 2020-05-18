import {
  getUserByName,
  USER_BIO,
  USER_CONVERSATIONS,
  USER_FRIENDS,
  USER_ID,
  USER_NAME,
  USER_PASSWORD,
} from "./GetUser";
import { createUser } from "./PostUser";

/**
 *  The return possibilities for the the two exposed services
 */
export const FAIL = -1;
export const SUCCESS = 0;
export const DEFAULT = 1;

export const authenticateUser = async (
  username: String,
  password: String,
  userDataHandler: Function
) => {
  let requestData = await getUserByName(username);
  if (requestData === undefined) {
    /**
     * The user has no valid account. Should be redirected to the sign-up page
     */
    return FAIL;
  } else {
    /**
     * Decompose request data
     */
    let user_password = requestData[USER_PASSWORD];
    if (user_password === password) {
      userDataHandler({
        userId: requestData[USER_ID],
        userName: requestData[USER_NAME],
        userBio: requestData[USER_BIO],
        userConversations: requestData[USER_CONVERSATIONS],
        userFriends: requestData[USER_FRIENDS],
      });
      return SUCCESS;
    } else {
      return FAIL;
    }
  }
};

export const registerUser = async (
  username: String,
  password: String,
  bio: String,
  userDataHandler: Function
) => {
  /**
   *  Validate the input fields
   */
  if (username === "" || username === null || username === undefined) {
    return FAIL;
  }
  if (password === "" || password === null || password === undefined) {
    return FAIL;
  }
  /**
   * Verify if the username and passwords are available
   */
  let requestUserData = await getUserByName(username);
  if (requestUserData === undefined) {
    /**
     *  The username is available:
     *  1. Create user
     *  2. Verify if the POST was successful
     *  3. Return associated status
     */
    await createUser(username, password, bio);
    let validationData = await getUserByName(username);
    if (validationData === undefined) {
      /**
       * The sign up process was unsuccessful
       */
      return FAIL;
    } else {
      let validationPassword = validationData["user_password"];
      if (validationPassword === password) {
        /**
         * The sign up process was successful
         */
        userDataHandler({
          userId: validationData[USER_ID],
          userName: validationData[USER_NAME],
          userBio: validationData[USER_BIO],
          userConversations: validationData[USER_CONVERSATIONS],
          userFriends: validationData[USER_FRIENDS],
        });
        return SUCCESS;
      } else {
        return FAIL;
      }
    }
  }
};
