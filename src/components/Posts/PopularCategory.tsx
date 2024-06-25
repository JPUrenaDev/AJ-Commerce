import React from "react";

export const PopularCategory = () => {
  return (
    <div className="bg-white mt-6 mb-6  w-[1080px] h-[290px]     px-[40px] py-4 mx-auto  rounded-lg px-[40px] py-4 ">
      <h2 className="font-bold text-[20px]  mb-4">Categorías Populares</h2>
      <div className="flex items-center gap-3 justify-center">
        <div className="border w-[210px] h-[200px] border-gray-300 cursor-pointer shadow-md rounded-md flex justify-center items-center flex-col">
          <img
            className="w-[130px] cover-image h-[120px]"
            src="https://www.corotos.com.do/assets/sub_categories/jeepetas-camionetas-efb4bc1db78d856ccbfb80cd50e77b4645bad9d0fe044d2c49819cdf30c81580.svg"
            alt=""
          />
          <h3 className="font-semibold">Empleos disponibles </h3>
          <label className="text-gray-400">6065 anuncios</label>
        </div>
        <div className="border w-[210px] h-[200px] border-gray-300 cursor-pointer shadow-md rounded-md flex justify-center items-center flex-col">
          <img
            className="w-[130px] cover-image h-[120px]"
            src="https://www.corotos.com.do/assets/sub_categories/disponibles-ef9d4d7a75746b7bd70a84a33e364d505f546acef73428fbaaf0080e0330287a.svg"
            alt=""
          />
          <h3 className="font-semibold">Carros</h3>
          <label className="text-gray-400">6065 anuncios</label>
        </div>
        <div className="border w-[210px] h-[200px] border-gray-300 cursor-pointer shadow-md rounded-md flex justify-center items-center flex-col">
          <img
            className="w-[130px] cover-image h-[120px]"
            src="https://www.corotos.com.do/assets/sub_categories/carros-0be0b6280a32d9852bca1a79096ec1576806f5be3aa8ffd7562f036a2db00648.svg"
            alt=""
          />
          <h3 className="font-semibold">Apartamentos en alquiler</h3>
          <label className="text-gray-400">6065 anuncios</label>
        </div>
        <div className="border w-[210px] h-[200px] border-gray-300 cursor-pointer shadow-md rounded-md flex justify-center items-center flex-col">
          <img
            className="w-[130px] cover-image h-[120px]"
            src="https://www.corotos.com.do/assets/sub_categories/apartamentos-9262404e57e27640860c29718840c219b0f9d2b2d9b9d3b7ddcb7aa8cdc27328.svg"
            alt=""
          />
          <h3 className="font-semibold">Muebles y colchones</h3>
          <label className="text-gray-400">6065 anuncios</label>
        </div>
        <div className="border w-[210px] h-[200px] border-gray-300 cursor-pointer shadow-md rounded-md flex justify-center items-center flex-col">
          <img
            className="w-[130px] cover-image h-[120px]"
            src="https://www.corotos.com.do/assets/sub_categories/muebles-colchones-0ed0c1ab463c69a3b4493498bdc7592873098a204dd06cec40f1d949d3f2e141.svg"
            alt=""
          />
          <h3 className="font-semibold">Jeepetas y camionetas</h3>
          <label className="text-gray-400">6065 anuncios</label>
        </div>
      </div>
    </div>
  );
};
