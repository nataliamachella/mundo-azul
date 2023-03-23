import React from "react";
import Header from "../../components/Header/Header";
import styles from "./about-me.module.css";
import Image from "next/image";
import photo from "../../public/assets/Sofi.jpg";

const AboutMe = () => {
  return (
    <>
      <Header />
      <div className={styles.AboutMe}>
        <h1 className={styles.h1}>
          Hola! soy Natalia. <br></br>
          Me alegra que estés aquí...
        </h1>

        <Image
          src={photo}
          alt="foto de Sofia y su mamá"
          className={styles.img}
        />
        <div className={styles.text}>
          <p>
            Desde que comencé a programar, una de las primeras cosas que me
            entusiasmaba realizar era un lugar en la web que permitiera a todas
            las familias que tengan niñ@s con TEA estar más comunicados para
            empoderarnos y compartir experiencias vividas con nuestros peques.
            Pero también un lugar en donde podamos encontrar médicos
            especializados en ese diagnóstico y recetas saludables que mejoren
            la calidad de vida de nuestros niñ@s.
          </p>
          <p>
            Cuando comenzamos a transitar este camino, no sabemos bien por dónde
            comenzar, qué trámites debemos realizar, cuáles son nuestros
            derechos, etc. Por eso, con mucho amor quise crear este espacio para
            ayudarnos entre todos y apoyarnos mutuamente porque como dicen por
            ahí:<br></br>
            <strong>
              "Nadie es tan importante como todos nosotros JUNTOS"
            </strong>
          </p>
          <p>Con cariño,</p>
          <p>Natalia 💙 </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
