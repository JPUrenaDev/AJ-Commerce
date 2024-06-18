import React from "react";
import { FaRegHeart } from "react-icons/fa";
export const DoOffer = () => {
  return (
    <div className="w-[400px] h-[50px] rounded-lg  ">
      <div className="flex shadow-2xl justify-center  items-center gap-4 bg-yellow-400 hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4  border-blue-500 hover:border-transparent rounded">
        <FaRegHeart color="black" />
        <h3 className="text-black">Hacer oferta</h3>
      </div>
    </div>
  );
};
