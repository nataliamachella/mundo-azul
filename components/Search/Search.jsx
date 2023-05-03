"use client";
import React from "react";
import Swal from "sweetalert2";
import iconSearch from "../../public/assets/Search.png";
import { useRouter } from "next/navigation";
import styles from "./Search.module.css";

const Search = () => {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length === 0) {
      Swal.fire("Tienes que escribir una palabra clave");
    } else {
      router.push(`/busqueda?palabra-clave=${keyword}`);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler} className={styles.search}>
        <input type="text" name="keyword" placeholder="Buscar..." />
        <input type="image" src={iconSearch} />
      </form>
    </div>
  );
};

export default Search;
