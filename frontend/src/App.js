import "./App.css";
import Chat from "./components/chat";
import StartChatForm from "./components/startChatForm";
import Navigation from "./components/navigation";

import { Routes, Route } from "react-router-dom";

import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("ws://localhost:3005");

function App() {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [lastPong, setLastPong] = useState(null);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setIsConnected(true);
  //   });

  //   socket.on("disconnect", () => {
  //     setIsConnected(false);
  //   });

  //   socket.on("pong", () => {
  //     setLastPong(new Date().toISOString());
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.off("pong");
  //   };
  // }, []);

  // const sendPing = () => {
  //   socket.emit("ping");
  // };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navigation />
      </header>

      <main className="container flex-fill">
        <Routes>
          <Route path="" element={<StartChatForm />} />
          <Route path="/:roomId" element={<Chat />} />
        </Routes>
      </main>

      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
