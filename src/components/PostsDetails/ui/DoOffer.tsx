import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuTag } from "react-icons/lu";
export const DoOffer = () => {
  return (
    <div className="w-[400px] h-[50px] rounded-lg cursor-pointer ">
      <div className="flex shadow-2xl justify-center  items-center gap-4 bg-yellow-400 hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4  border-blue-500 hover:border-transparent rounded">
        <LuTag color="black" />
        <h3 className="text-black">Hacer oferta</h3>
      </div>
    </div>
  );
};
