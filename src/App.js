import "./styles.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  );
}
