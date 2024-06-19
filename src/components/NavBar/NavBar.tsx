import React from "react";
import { SearchBar } from "./SearchBar";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div
        className="bg-blue-900 h-[80px] flex items-center
    justify-center gap-9"
      >
        <h1 className="text-white">J&A Commerce</h1>
        <SearchBar />
        <Link to={"/login"} className="text-white font-semibold cursor-pointer">
          Iniciar sesión
        </Link>
        <button className="bg-yellow-400 p-2 rounded text-blue-900 font-semibold">
          + Publicar
        </button>
      </div>

      <div className="mt-[300px]">
        <Outlet />
      </div>
    </>
  );
};

//yellow-400
