import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AboutMe from "./pages/AboutMe/AboutMe";
import SearchPage from "./pages/SearchPage/SearchPage";
import Doctors from "./pages/Doctors/Doctors";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sobre-mi"
            element={
              <ProtectedRoute>
                <AboutMe />
              </ProtectedRoute>
            }
          />
          <Route path="/busqueda" element={<SearchPage />} />
          <Route path="/doctores" element={<Doctors />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
