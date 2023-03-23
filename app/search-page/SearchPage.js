import React from "react";

import "./SearchPage.css";

const SearchPage = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("palabra-clave");
  return (
    <div>
      Soy la pagina de busqueda
      <p>Vas a buscar : {keyword}</p>
    </div>
  );
};

export default SearchPage;
