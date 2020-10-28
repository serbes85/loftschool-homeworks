import React, { useState } from 'react';
import Message from '../Message';
import './Chat.css';

const Chat = () => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const changeInputMessage = (event) => {
    setMessageInput(event.target.value);
  };
  const sendMessageOnEnter = (event) => {
    if (event.key === 'Enter') {
      setMessages([...messages, { text: messageInput }]);
      setMessageInput('');
    }
  };

  const listMessages = messages.map((item, index) => {
    return <Message text={item.text} key={Date.now()} />;
  });
  return (
    <div className="chat">
      <div className="message-list">
        <div className="messages">
          {listMessages.length ? listMessages : null}
        </div>
      </div>
      <input
        type="text"
        className="input-message"
        onChange={changeInputMessage}
        onKeyPress={sendMessageOnEnter}
        value={messageInput}
        placeholder="Enter text please"
      />
    </div>
  );
};

export default Chat;
