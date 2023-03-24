"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import logoMundoAzul from "../public/assets/Logo-MundoAzul.png";
import logoGoogle from "../public/assets/Logo_Google.png";
import logoFacebook from "../public/assets/logo_facebook.png";
import iconEmail from "../public/assets/icon_email.png";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import stylesButton from "../components/Button/Button.module.css";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button/Button";

const Home = () => {
  const router = useRouter();
  const { loginWithGoogle, loginWithFacebook, singUp } = useAuth();

  const handleLoginWithGoogle = async () => {
    await loginWithGoogle()
      .then(() => router.push("/dashboard"))
      .catch((error) => console.log(error));
  };
  const handleLoginWithFacebook = async () => {
    await loginWithFacebook()
      .then(() => router.push("/dashboard"))
      .catch((error) => console.log(error));
  };
  const handleClick = () => {
    router.push("/login");
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
      <Button
        style={stylesButton.blue}
        onClick={handleClick}
        img={iconEmail}
        text="Ingresar"
      />

      <Button
        style={stylesButton.primary}
        onClick={handleLoginWithFacebook}
        img={logoFacebook}
        text="Ingresar con Facebook"
      />

      <Button
        style={stylesButton.secondary}
        onClick={handleLoginWithGoogle}
        img={logoGoogle}
        text="Ingresar con Google"
      />

      <Footer />
    </div>
  );
};

export default Home;
