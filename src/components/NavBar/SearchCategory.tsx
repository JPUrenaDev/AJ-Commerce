import React from "react";
import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
export const SearchCategory = () => {
  return (
    <div className="flex items-center justify-center  mt-7 gap-[30px] text-white font-semi-bold">
      <div className="flex items-center gap-4">
        <Link
          className="flex cursor-pointer font-bold items-center gap-1"
          to={"/"}
        >
          Categorías y más
          <IoIosArrowDown size={20} />
        </Link>
        <RxDividerVertical size={24} color="gray" />
      </div>
      <div className="flex items-center gap-10">
        <Link to={"/"}>Inmuebles</Link>
        <Link to={"/"}>Vehículos</Link>
        <Link to={"/"}>Electrónica</Link>
        <Link to={"/"}>Hogar</Link>
        <Link to={"/"}>Empleo</Link>
        <div className="flex items-center gap-3">
          <RxDividerVertical size={24} color="gray" />
          <Link to={"/"}>Directorio</Link>
        </div>

        <Link to={"/"}>Soluciones para vendedores</Link>
      </div>
    </div>
  );
};
