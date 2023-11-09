import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: input,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      setMessages([...messages, { role: 'assistant', content: response.data.choices[0].text.trim() }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatGPT;
