"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import logoMundoAzul from "../public/assets/Logo-MundoAzul.png";
import logoGoogle from "../public/assets/Logo_Google.png";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import stylesButton from "../components/Button/Button.module.css";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const router = useRouter();
  const { loginWithGoogle } = useAuth();

  const handleLoginWithGoogle = async () => {
    await loginWithGoogle()
      .then(() => router.push("/dashboard"))
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.home}>
      <Image
        src={logoMundoAzul}
        alt="logo de Mundo Azul"
        className={styles.logo}
      />
      <h2>
        Ninguno es tan importante como todos nosotros <span>JUNTOS</span>
      </h2>
      <button
        onClick={() => router.push("/login")}
        className={stylesButton.primary}
      >
        Ingresar
      </button>
      <button className={styles.google} onClick={handleLoginWithGoogle}>
        <Image src={logoGoogle} alt="logo Google" />
        Ingresar con Google
      </button>
      <Footer />
    </div>
  );
};

export default Home;
