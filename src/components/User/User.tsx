import React from "react";
import path from "../../assets/default-user.png";
import "../../styles/User/User.css";

export interface UserProps {
  userId: string;
  userName: string;
  userBio: string;
  userConversations: [];
  userFriends: [];
}

const User = (data: UserProps) => (
  <div className="card user-profile m-1">
    <img src={path} className="card-img-top user-image" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{data.userName}</h5>
      <p className="card-text">{data.userBio}</p>
      <button type="button" className="btn btn-primary">
        Request message
      </button>
    </div>
  </div>
);

export default User;
