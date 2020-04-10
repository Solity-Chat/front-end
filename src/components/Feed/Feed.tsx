import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Conversation, { ConversationProps } from "./Conversation/Conversation";
import "../../styles/Feed/Feed.css";
import Card from "../Card/Card";
import mobileAppImg from "../../assets/mobile-app.png";

export interface FeedProps {
  conversations: ConversationProps[];
}
const TypingArea = () => (
  <div className="typing-area">
    <form className="bg-light">
      <div className="input-group">
        <input
          type="text"
          placeholder="Type a message"
          className="form-control rounded-0 border-0 py-4 bg-light"
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-link">
            <svg
              className="bi bi-arrow-bar-up"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </div>
);

const Feed = (data: FeedProps) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col conversations">
          <h3>Contacts</h3>
          <ul className="list-group list-group-flush">
            {data.conversations.map((conversation) => (
              <li className="list-group-item">
                <Link to={`${url}/${conversation.conversationUser.userName}`}>
                  <b>{conversation.conversationUser.userName}</b>{" "}
                  <span className="badge badge-pill badge-info">4</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col conversation-messages">
          <Switch>
            <Route exact path={path}>
              <div className="container mobile-advertisement">
                <Card
                  cardTitle={"Solity"}
                  cardContent={
                    "Solity will be available on cross-platform mobile soon. Stay tuned 🤩"
                  }
                />
                <div>
                  <img
                    src={mobileAppImg}
                    alt="..."
                    className="img-thumbnail mobile-app-image"
                  />
                </div>
              </div>
            </Route>
            {data.conversations.map((conversation) => (
              <Route
                path={`${path}/:${conversation.conversationUser.userName}`}
              >
                <Conversation
                  conversationMessages={conversation.conversationMessages}
                  conversationUser={conversation.conversationUser}
                />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
      <div className="row">
        <TypingArea />
      </div>
    </div>
  );
};

export default Feed;
