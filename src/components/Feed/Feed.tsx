import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Conversation, { ConversationProps } from "./Conversation/Conversation";
import "../../styles/Feed/Feed.css";
import Card from "../Card/Card";
import mobileAppImg from "../../assets/mobile-app.png";

const DEFAULT_UNREAD_MESSAGES = 0;

export interface FeedProps {
  conversations: ConversationProps[];
}

const initialUnreadMessages: Number[] = [];
const PopulateDefault = (conversations: ConversationProps[]) => {
  conversations.forEach((conversation) =>
    initialUnreadMessages.push(DEFAULT_UNREAD_MESSAGES)
  );
};

const Feed = (data: FeedProps) => {
  let { path, url } = useRouteMatch();
  PopulateDefault(data.conversations);
  let [unreadMessages, setUnreadMessages] = useState(initialUnreadMessages);

  const CountUnreadMessages = (conversation: ConversationProps) => {
    const unreadMessages = conversation.conversationMessages.filter(
      (message) => message.messageStatus === 0
    );
    console.log(unreadMessages.length);
    return unreadMessages.length;
  };

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
                  <span className="badge badge-pill badge-info">
                    {
                      unreadMessages[
                        data.conversations.findIndex((c) => c === conversation)
                      ]
                    }
                  </span>
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
