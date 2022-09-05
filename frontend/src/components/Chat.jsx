import { useState } from "react";
import { useParams, useLocation, useMatch } from "react-router-dom";
import useChatRoom from "../hooks/useChatRoom";

const Chat = () => {
  const { roomId } = useParams();
  const { state } = useLocation();

  const { messages, sendMessage } = useChatRoom({
    roomId,
    name: state?.name || "anonymous",
  });

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.length) {
      sendMessage(message);
      setMessage("");
    }
  };

  const messagesByDate = messages.reduce((acc, curr) => {
    const messageDate = new Date(curr.sentAt).toLocaleDateString();

    return {
      ...acc,
      [messageDate]: Array.isArray(acc[messageDate])
        ? [...acc[messageDate], curr]
        : [curr],
    };
  }, {});

  console.log(Object.keys(messagesByDate).sort());

  return (
    <div className="chat">
      <div
        className="messages"
        style={{
          height: "80vh",
          overflowY: "auto",
        }}
      >
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="day text-center my-3 text-warning fw-bold">
          THURSDAY, 22/05/2022
        </div>

        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="message">
          <span className="text-warning fw-bold me-2">20:00</span>
          <span className="text-success fw-bold">matan</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="message-input mt-3">
        <div className="input-group">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            type="text"
            className="form-control"
          />
          <button
            onClick={() => {
              handleSendMessage();
            }}
            className="btn btn-primary"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
