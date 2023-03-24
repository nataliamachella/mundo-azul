"use client";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import styles from "./register.module.css";
import stylesButton from "../../components/Button/Button.module.css";
import { useState } from "react";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const { signUp } = useAuth();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (error) return setError(error.message);
    try {
      await signUp(user.email, user.password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    }
    router.push("/dashboard");
  };
  return (
    <div className={styles.register}>
      {error && <ErrorAlert message={error} />}

      <h1>Bienvenid@!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Correo Electrónico"
          required="true"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Contraseña"
          required="true"
        />
        <button className={stylesButton.primary}>Registrarme</button>
      </form>
      <p>
        <span>Ya estás registrado? </span>
        <Link href="/login">Ingresar</Link>
      </p>
      <Footer />
    </div>
  );
};

export default Register;
