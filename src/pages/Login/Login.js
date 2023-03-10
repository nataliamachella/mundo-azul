import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);

      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Debes ingresar tu correo electrónico");
    try {
      await resetPassword(user.email);
      setError(
        "Enviamos un correo electrónico con un enlace para reestablecer tu contraseña"
      );
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="login">
      <h1>Hola!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <Button text="Ingresar" style="primary-btn" />
      </form>
      <p>
        Si no tienes una cuenta puedes crearla
        <a href="/registro"> AQUÍ</a>
      </p>
      {error && <ErrorAlert message={error} />}
      <a onClick={handleResetPassword} className="reset-password">
        Olvidé la contraseña
      </a>

      <Footer />
    </div>
  );
};

export default Login;
