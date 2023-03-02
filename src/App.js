import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserContextProvider from "./context/userContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
