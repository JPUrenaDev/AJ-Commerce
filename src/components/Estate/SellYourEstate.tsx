import React from "react";
import { Link } from "react-router-dom";

export const SellYourEstate = () => {
  return (
    <div className="ml-[410px] mt-[50px] flex items-center gap-3 w-[55%] ">
      <div className="border border-gray-300 w-[50%] h-[180px] shadow-inner rounded-md px-5 py-3">
        <div className="flex flex-col">
          <h3 className="font-bold text-[20px] ">Vende tu inmueble</h3>
          <h4>Rápido y gratis</h4>
          <Link to={"#"} className="text-blue-900 text-[13px] mb-4">
            Publica ahora tu inmueble en venta o alquiler
          </Link>
          <button className="bg-blue-900 rounded-md font-semibold  text-white w-[98%] h-[37px]">
            Publicar
          </button>
        </div>
      </div>
      <div className="border border-gray-300 w-[50%] h-[180px] shadow-inner rounded-md px-5 py-3">
        <div className="flex flex-col">
          <h3 className="font-bold text-[20px] ">Publica como Inmobiliaria</h3>
          <h4>Vende y alquila inmuebles como un profesional</h4>
          <Link to={"#"} className="text-blue-900 text-[13px] mb-4">
            Ten tu cuenta profesional
          </Link>
          <button className="bg-yellow-400 rounded-md font-semibold  text-black w-[98%] h-[37px]">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
};
