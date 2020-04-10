import React from "react";

export interface MessageProps {
  messageStatus: Number;
  messageSender: String;
  messageContent: String;
}

const Message = (data: MessageProps) => (
  <div className="message-body">
    <div className="media w-50 ml-auto mb-3">
      <div className="media-body">
        <div className="bg-primary rounded py-2 px-3 mb-2">
          <p className="text-small mb-0 text-white">{data.messageContent}</p>
        </div>
        <p className="small text-muted">12:00 PM | Aug 13</p>
      </div>
    </div>
  </div>
);

export default Message;
