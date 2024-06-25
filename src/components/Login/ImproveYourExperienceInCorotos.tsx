import React from "react";
import { Link } from "react-router-dom";

export const ImproveYourExperienceInCorotos = () => {
  return (
    <div className="bg-white rounded-lg  px-4 py-4  w-[340px] h-[280px]">
      <h2 className="font-semibold text-center text-[20px] mb-5 pt-4">
        Mejora tu experiencia en Corotos
      </h2>
      <div className="flex flex-col items-center gap-4">
        <button className="text-white bg-blue-800 rounded-lg w-[280px]  h-[44px]">
          Iniciar sesión
        </button>

        <button className="font-semibold text-blue-800 border rounded-lg w-[280px]  h-[44px]">
          Crear una cuenta
        </button>

        <Link to={"/"}>Necesitas ayuda?</Link>
      </div>
    </div>
  );
};
