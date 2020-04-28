import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Conversation, { ConversationProps } from "./Conversation/Conversation";
import "../../styles/Feed/Feed.css";
import Card from "../Card/Card";
import mobileAppImg from "../../assets/mobile-app.png";

export interface FeedProps {
  conversations: ConversationProps[];
}

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
    </div>
  );
};

export default Feed;
