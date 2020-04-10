import React from "react";
import Message, { MessageProps } from "../Message";
import { UserProps } from "../../User/User";

export interface ConversationProps {
  conversationMessages: MessageProps[];
  conversationUser: UserProps;
}

const Conversation = (data: ConversationProps) => (
  <div className="conversation-body">
    <div className="conversation-body-user-info">
      <h1>{data.conversationUser.userName}</h1>
      <span className="badge badge-pill badge-warning">Active 30 min ago</span>
    </div>

    <hr />
    <div className="conversation-body-messages">
      {data.conversationMessages.map((message) => (
        <Message
          messageStatus={message.messageStatus}
          messageSender={message.messageSender}
          messageContent={message.messageContent}
        />
      ))}
    </div>
  </div>
);

export default Conversation;
