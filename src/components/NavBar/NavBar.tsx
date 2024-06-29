import React from "react";
import { SearchBar } from "./SearchBar";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { SearchCategory } from "./SearchCategory";
import { FaPlus } from "react-icons/fa";

export const NavBar = () => {
  return (
    <>
      <div className="bg-blue-900 h-[120px] pt-3 fixed top-0 left-0 right-0 z-10">
        <div
          className=" flex items-center
    justify-center gap-9"
        >
          <h1 className="text-white">J&A Commerce</h1>
          <SearchBar />
          <div className="flex items-center gap-3">
            <Link
              to={"/login"}
              className="text-white font-semibold cursor-pointer"
            >
              Iniciar sesión
            </Link>
            <button className="bg-yellow-400 w-[110px] p-2 flex items-center gap-2 rounded-lg pl-3 text-blue-900 font-semibold">
              <FaPlus />
              <label> Publicar</label>
            </button>
          </div>
        </div>
        <SearchCategory />
      </div>
    </>
  );
};

//yellow-400
