import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
export const Estate = () => {
  return (
    <div className="flex-grow w-full h-full  mt-[-100px] ml-[200px]  ">
      <div className="w-1/3  flex flex-col items-center font-bold text-blue-900">
        <h2 className="text-black">INMUEBLES</h2>
        <h1 className="text-[30px]">
          Descubre la Propiedad de tu <br></br>
        </h1>
        <h1 className="text-[30px]">Sueños en Corotos</h1>

        <div className="bg-sky-100 w-full h-[130px] rounded-md">
          <div className="flex items-center justify-center gap-3 pt-1">
            <h3>Todos</h3>
            <h3>Venta</h3>
            <h3>Alquiler</h3>
          </div>
          <div className="flex items-center px-3 mt-4  gap-3 w-full">
            <input
              placeholder="Inmueble"
              className="w-[33%] h-[50px] rounded-md px-2"
            ></input>
            <input
              placeholder="Inmueble"
              className="w-[33%] h-[50px] rounded-md px-2"
            ></input>
            <input
              placeholder="Inmueble"
              className="w-[33%] h-[50px] rounded-md px-2"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
