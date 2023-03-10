import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import logoMundoAzul from "../../assets/Logo.svg";
import logoGoogle from "../../assets/Google__G__logo.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Home = () => {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();

  const handleClick = () => {
    navigate("/login");
  };

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="home">
      <img src={logoMundoAzul} alt="logo de Mundo Azul" className="logo"></img>
      <h2>
        Ninguno es tan importante como todos nosotros <span>JUNTOS</span>
      </h2>
      <Button text="Ingresar" onClick={handleClick} style="primary-btn" />
      <button className="google-btn" onClick={handleLoginWithGoogle}>
        <img src={logoGoogle} alt="logo Google" />
        Ingresar con Google
      </button>
      <Footer />
    </div>
  );
};

export default Home;
