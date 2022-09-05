import "./App.css";
import Chat from "./components/Chat";
import ChatRooms from "./components/ChatRooms";
import Navigation from "./components/Navigation";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navigation />
      </header>

      <main className="container flex-fill">
        <Routes>
          <Route path="" element={<ChatRooms />} />
          <Route path="/:roomId" element={<Chat />} />
        </Routes>
      </main>

      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
