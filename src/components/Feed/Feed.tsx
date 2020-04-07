import React from "react";
import Message, { MessageProps } from "./Message";

export interface FeedProps {
  messages: MessageProps[];
}

const Feed = (data: FeedProps) => (
  <div className="main">
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

export default Feed;
