"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import stylesButton from "../../components/Button/Button.module.css";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/navigation";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const router = useRouter();
  const { login, resetPassword } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    await login(user.email, user.password)
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Debes ingresar tu correo electrónico");

    await resetPassword(user.email)
      .then(() =>
        setError(
          "Enviamos un correo electrónico con un enlace para reestablecer tu contraseña"
        )
      )

      .catch((error) => setError(error.message));
  };
  return (
    <div className={styles.login}>
      <h1>Hola!</h1>
      {!user && <ErrorAlert message={error} />}
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
        <button className={stylesButton.primary}>Ingresar</button>
      </form>
      <p>
        Si no tienes una cuenta puedes crearla
        <Link href="/register"> AQUÍ</Link>
      </p>
      {error && <ErrorAlert message={error} />}
      <a onClick={handleResetPassword} className={styles.reset}>
        Olvidé la contraseña
      </a>

      <Footer />
    </div>
  );
};

export default Login;
