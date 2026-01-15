import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">

      {/* Header */}
      <div className="chat-header">
        <img src={assets.profile_img} alt="user" className="user-img" />
        <div className="user-info">
          <h4>Richard Sanford</h4>
          <span className="online">
            <img src={assets.green_dot} alt="online" /> Online
          </span>
        </div>
        <img src={assets.help_icon} alt="help" className="help-icon" />
      </div>

      {/* Messages */}
      <div className="chat-body">

        {/* Sender */}
        <div className="message sender">
          <div className="bubble">
            Hello, this is sender message.
            <span className="time">2:30 PM</span>
          </div>
          <img src={assets.profile_img} alt="sender" />
        </div>

        {/* Receiver */}
        <div className="message receiver">
          <img src={assets.profile_img} alt="receiver" />
          <div className="bubble">
            Hi! This is receiver reply.
            <span className="time">2:31 PM</span>
          </div>
        </div>

      </div>

      {/* Input */}
      <div className="chat-footer">
        <input type="text" placeholder="Type a message..." />

        <input type="file" id="imgUpload" hidden />
        <label htmlFor="imgUpload">
          <img src={assets.gallery_icon} alt="gallery" />
        </label>

        <button>
          <img src={assets.send_button} alt="send" />
        </button>
      </div>

    </div>
  );
};

export default ChatBox;
