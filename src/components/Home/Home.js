import React from "react";
import "./Home.css";
import Footer from "../../common/Footer/Footer";
import logoMundoAzul from "../../assets/Logo.svg";
import logoGoogle from "../../assets/Google__G__logo.svg";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="home">
      <img src={logoMundoAzul} alt="logo de Mundo Azul" className="logo"></img>
      <h2>
        Ninguno es tan importante como todos nosotros <span>JUNTOS</span>
      </h2>
      <Button text="Ingresar" onClick={handleClick} style="primary-btn" />
      <button className="google-btn">
        <img src={logoGoogle} alt="logo Google" />
        Conectar con Google
      </button>
      <Footer />
    </div>
  );
};

export default Home;
