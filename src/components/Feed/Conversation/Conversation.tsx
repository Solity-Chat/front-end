import React from "react";
import Message, { MessageProps } from "../Message";
import { UserProps } from "../../User/User";

export interface ConversationProps {
  conversationMessages: MessageProps[];
  conversationUser: UserProps;
}

const Conversation = (data: ConversationProps) => (
  <div className="conversation-body">
    <h1>{data.conversationUser.userName}</h1>
    <ul className="messages">
      {data.conversationMessages.map((message) => (
        <Message
          messageStatus={message.messageStatus}
          messageSender={message.messageSender}
          messageContent={message.messageContent}
        />
      ))}
    </ul>
  </div>
);

export default Conversation;
