"use client";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import styles from "./register.module.css";
import stylesButton from "../../components/Button/Button.module.css";
import { useState } from "react";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import Title from "../../components/Title/Title";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const { createUser } = useAuth();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(data.email, data.password);

      Swal.fire({
        icon: "success",
        title: "Cuenta Creada",
        text: "Su cuenta  ha sido creada exitosamente!",
      });

      router.push("/dashboard");
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setError("Su contraseña debe tener al menos 6 caracteres");
      }

      if (error.code === "auth/email-already-in-use") {
        setError("Este correo ya se encuentra registrado");
      }
    }
  };
  return (
    <>
      <div className={styles.register}>
        <Title text="Mundo Azul" />
        <h3>Registro</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Correo Electrónico"
            required={true}
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Contraseña"
            required={true}
          />
          <button className={stylesButton.primary}>Registrarme</button>
        </form>
        {error && <ErrorAlert message={error} />}
        <p>
          Ya estás registrado? <Link href="/login">Ingresar</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Register;
