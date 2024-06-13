import React from "react";
import { SearchBar } from "./SearchBar";
import { Outlet } from "react-router";

export const NavBar = () => {
  return (
    <>
      <div
        className="bg-blue-900 h-[80px] flex items-center
    justify-center gap-9"
      >
        <h1 className="text-white">J&A Commerce</h1>
        <SearchBar />
        <h4 className="text-white font-semibold cursor-pointer">
          Iniciar sesión
        </h4>
        <button className="bg-yellow-400 p-2 rounded text-blue-900 font-semibold">
          + Publicar
        </button>
      </div>

      <Outlet />
    </>
  );
};

//yellow-400
