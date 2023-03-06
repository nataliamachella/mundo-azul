import Footer from "../../common/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import Button from "../../common/Button/Button";
import ErrorAlert from "../../common/ErrorAlert/ErrorAlert";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="register">
      {error && <ErrorAlert message={error} />}

      <h1>Bienvenid@!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Correo Electrónico"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <Button text="Registrarme" style="primary-btn" />
      </form>
      <p>
        <span>Ya estás registrado? </span>
        <Link to="/login">Ingresar</Link>
      </p>
      <Footer />
    </div>
  );
};

export default Register;
