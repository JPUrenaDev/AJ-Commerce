import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { DoOffer } from "./ui/DoOffer";

export const ChangePagePostsDetails = () => {
  return (
    <div className="py-4 flex items-center justify-between w-[400px] ">
      <div>
        <Link className="text-blue-800" to={"/"}>
          {" "}
          Resultados
        </Link>
      </div>
      <div className="flex items-center gap-4 text-blue-800">
        <div className="flex items-center gap-3">
          <FaArrowLeft />
          <Link to={"/"}>Anterior</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to={"/"}>Siguiente</Link>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};
