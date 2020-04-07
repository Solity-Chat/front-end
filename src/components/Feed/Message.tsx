import React from "react";

export interface MessageProps {
  messageStatus: Number;
  messageSender: String;
  messageContent: String;
}

const Message = (data: MessageProps) => (
  <div className="shadow p-3 m-4 rounded">
    <div className="wrap">
      <span className="contact-status">
        {data.messageStatus === 0 ? "Unread" : "Read"}
      </span>
      <div className="meta">
        <p className="name">{data.messageSender}</p>
        <p className="preview">{data.messageContent}</p>
      </div>
    </div>
  </div>
);

export default Message;
