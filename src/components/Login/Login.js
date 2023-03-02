import React from "react";
import "./Login.css";
import Button from "../../common/Button/Button";
import Footer from "../../common/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="login">
      <h1>Hola!</h1>
      <input type="email" name="email" placeholder="Correo Electrónico" />
      <input type="password" name="password" placeholder="Contraseña" />
      <p>
        Si no tienes una cuenta puedes crearla
        <a href="/registro"> AQUÍ</a>
      </p>
      <Button text="Ingresar" onClick={handleClick} style="primary-btn" />
      <Footer />
    </div>
  );
};

export default Login;
