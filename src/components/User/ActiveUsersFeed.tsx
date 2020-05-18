import React, { useState } from "react";
import User, { UserProps } from "./User";
import "../../styles/User/ActiveUsersFeed.css";
import Card from "../Card/Card";
import {
  DEFAULT_STATUS,
  searchUser,
  USER_NOT_FOUND,
} from "../../containers/UsersSearchService";

export interface ActiveUsersFeedProps {
  users: UserProps[];
}

const ActiveUsersFeed = (data: ActiveUsersFeedProps) => {
  let [searchBarInput, setSearchBarInput] = useState("");
  let [searchStatus, setSearchStatus] = useState(DEFAULT_STATUS);
  let [searchResult, setSearchResult] = useState([]);

  const searchInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchBarInput(event.currentTarget.value);

  const searchButtonHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let response = await searchUser(searchBarInput, setSearchResult);
    setSearchStatus(response);
  };

  const noUserScreen = () => (
    <Card
      cardTitle={"There is no user with this name"}
      cardContent={
        "Please request the name that the user uses in the network from the person you want to contact!"
      }
    />
  );

  const searchBarResultUsers = () => (
    <div className="container">
      {searchStatus === USER_NOT_FOUND ? (
        noUserScreen()
      ) : (
        <div className="contacts">
          {searchResult.map((user: UserProps) => (
            <User
              key={user.userId}
              userName={user.userName}
              userBio={user.userBio}
              userConversations={[]}
              userFriends={[]}
              userId={""}
            />
          ))}
        </div>
      )}
    </div>
  );

  const searchBar = () => (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={searchInputOnChange}
        />
        <small className="form-text text-muted">
          Search the name of the person you want to talk with!
        </small>
      </div>
      <button className="btn btn-primary" onClick={searchButtonHandler}>
        Go!
      </button>
    </form>
  );

  const activeUserFriends = () => (
    <div className="contacts">
      {data.users.map((user) => (
        <User
          userName={user.userName}
          userBio={user.userBio}
          userConversations={[]}
          userFriends={[]}
          userId={""}
        />
      ))}
    </div>
  );

  return (
    <div className="container">
      <div className="container">{searchBar()}</div>
      <hr />
      <div className="container">{searchBarResultUsers()}</div>
      <hr />
      <div className="container">{activeUserFriends()}</div>
    </div>
  );
};

export default ActiveUsersFeed;
