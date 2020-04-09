import React from "react";
import Message, { MessageProps } from "../../../components/Feed/Message";
import { UserProps } from "../../../components/User/User";

interface ConversationProps {
  messages: MessageProps[];
  user: UserProps;
}

const Conversation = (data: ConversationProps) => (
  <div className="main">
    <h1>{data.user.userName}</h1>
    <ul className="messages">
      {data.messages.map((message) => (
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
