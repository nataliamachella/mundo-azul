import React from "react";
import Header from "../../components/Header/Header";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="aboutMe">
        <h2>Hola, soy Natalia. Me alegra que estés aquí...</h2>

        <img src="/Sofi.jpg" />
        <div className="aboutMe__text">
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
            ahí:
            <strong>
              "Nadie es tan importante como todos nosotros juntos".
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
