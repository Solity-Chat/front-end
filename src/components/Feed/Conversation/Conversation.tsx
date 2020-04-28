import React, { useState } from "react";
import Message, { MessageProps } from "../Message";
import { UserProps } from "../../User/User";
import "../../../styles/Feed/Conversation/Conversation.css";

export interface ConversationProps {
  conversationMessages: MessageProps[];
  conversationUser: UserProps;
}

const Conversation = (data: ConversationProps) => {
  let [messages, setMessages] = useState(data.conversationMessages);
  let [inputContent, setInputContent] = useState("");
  const user = data.conversationUser;

  const MessageHandler = () => {
    if (inputContent != "") {
      let newMessage = {
        messageStatus: 0,
        messageSender: "Me",
        messageContent: inputContent,
      };
      setMessages([...messages, newMessage]);
      setInputContent("");
    }
  };

  return (
    <div className="conversation-body container">
      <div className="conversation-body-user-info col">
        <h1>{user.userName}</h1>
      </div>

      <hr />
      <div className="conversation-body-messages col">
        {messages.map((message) => (
          <Message
            messageStatus={message.messageStatus}
            messageSender={message.messageSender}
            messageContent={message.messageContent}
          />
        ))}
      </div>
      <div className="conversation-body-typing-area col">
        <div className="input-group mb-3">
          <input
            type="text"
            value={inputContent}
            className="form-control"
            onChange={(event) => setInputContent(event.currentTarget.value)}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => MessageHandler()}
            >
              <svg
                className="bi bi-cursor-fill"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.082 2.182a.5.5 0 01.103.557L8.528 15.467a.5.5 0 01-.917-.007L5.57 10.694.803 8.652a.5.5 0 01-.006-.916l12.728-5.657a.5.5 0 01.556.103z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
