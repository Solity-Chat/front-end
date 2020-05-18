import {
  getUserByName,
  USER_BIO,
  USER_CONVERSATIONS,
  USER_FRIENDS,
  USER_ID,
  USER_NAME,
} from "./GetUser";
export const USER_FOUND = 0;
export const USER_NOT_FOUND = 1;
export const DEFAULT_STATUS = -1;

export const searchUser = async (username: String, setResult: Function) => {
  if (username === "" || username === null || username === undefined) {
    return USER_NOT_FOUND;
  } else {
    let requestData = await getUserByName(username);
    if (requestData === undefined) {
      return USER_NOT_FOUND;
    } else {
      setResult([
        {
          userId: requestData[USER_ID],
          userName: requestData[USER_NAME],
          userBio: requestData[USER_BIO],
          userConversations: requestData[USER_CONVERSATIONS],
          userFriends: requestData[USER_FRIENDS],
        },
      ]);
      return USER_FOUND;
    }
  }
};
