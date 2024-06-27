import React from "react";

export const MoreForYou = () => {
  return (
    <div className="bg-white rounded-lg w-[1080px] h-[330px] mx-auto mt-4 px-4">
      <h2 className="font-bold text-[20px] mb-3 pt-3">Mas de J&A para ti</h2>

      <div className="w-[100%] flex gap-6 pb-3 mt-[30px] ">
        <div className="border border-gray-400 h-[220px] w-[50%] rounded-lg shadow-lg px-4 py-3 flex  justify-between cursor-pointer ">
          <div className="flex flex-col justify-between">
            <div className=" ">
              <h3>J&A Plus</h3>
              <h3 className="font-bold text-[20px]">Impulsa tus ventas</h3>
            </div>
            <button className="bg-blue-900 text-white font-bold py-3 rounded-lg w-[130px] h-[45px]">
              Comprar ahora
            </button>
          </div>
          <img
            src="https://www.corotos.com.do/assets/conoce-proyectos-c76e97ce8f9943a85ddef34f47514f6e9fb7a315d30aa599be67c89dafdc2946.svg"
            className="w-[150px]"
          ></img>
        </div>

        <div className="border border-gray-400 h-[220px] w-[50%] rounded-lg shadow-lg px-4 py-3 flex  justify-between cursor-pointer ">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col  ">
              <h3>Proyectos by J&A</h3>
              <h3 className="font-bold text-[20px]">
                Conoce proyectos de nueva construccion
              </h3>
            </div>
            <button className="bg-blue-900 text-white font-bold py-3 rounded-lg w-[130px] h-[45px]">
              Saber mas
            </button>
          </div>
          <img
            src="https://www.corotos.com.do/assets/impulsa--tus.ventas-9262404e57e27640860c29718840c219b0f9d2b2d9b9d3b7ddcb7aa8cdc27328.svg"
            className="w-[150px]"
          ></img>
        </div>
      </div>
    </div>
  );
};
