import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="w-[700px] p-1 "
        placeholder="Busca entre miles de anuncios y categorías"
      ></input>
      <div className="absolute bg-yellow-400 w-[40px] top-0 right-0 h-full cursor-pointer">
        <FaMagnifyingGlass className="m-auto absolute top-2 left-3" />
      </div>
    </div>
  );
};
