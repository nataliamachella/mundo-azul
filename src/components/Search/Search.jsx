import React from "react";
import Swal from "sweetalert2";
import iconSearch from "../../assets/Search.png";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length === 0) {
      Swal.fire("Tienes que escribir una palabra clave");
    } else {
      navigate(`/busqueda?palabra-clave=${keyword}`);
    }
  };
  return (
    <form onSubmit={submitHandler} className="search">
      <label>
        <input type="text" name="keyword" placeholder="Buscar..." />
      </label>
      <button>
        <img src={iconSearch} />
      </button>
    </form>
  );
};

export default Search;
