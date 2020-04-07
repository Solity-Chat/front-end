import React from "react";
import User, { UserProps } from "./User";
import "../../styles/User/ActiveUsersFeed.css";

export interface ActiveUsersFeedProps {
  users: UserProps[];
}

const ActiveUsersFeed = (data: ActiveUsersFeedProps) => (
  <div className="contacts">
    {data.users.map((user) => (
      <User userName={user.userName} userBio={user.userBio} />
    ))}
  </div>
);

export default ActiveUsersFeed;
