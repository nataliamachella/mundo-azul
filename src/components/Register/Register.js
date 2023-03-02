import React, { useContext } from "react";
import Footer from "../../common/Footer/Footer";
import { Link } from "react-router-dom";
import userContextProvider from "../../context/userContext";

const Register = () => {
  const [form, setForm] = useContext(userContextProvider);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Bienvenid@!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="lastname"
          onChange={handleChange}
          placeholder="Apellido"
        />
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
        <button type="submit">Registrarme</button>
      </form>
      <div>
        <span>Ya estás registrado?</span>
        <Link to="/">Ingresar</Link>
      </div>
      <Footer />
    </>
  );
};

export default Register;
