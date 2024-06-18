import React from "react";
import { FaRegHeart } from "react-icons/fa";

export const SaveInFavorite = () => {
  return (
    <div className="w-[400px] h-[50px] rounded-lg mt-5 mb-3 cursor-pointer">
      <div className="flex shadow-2xl justify-center  items-center gap-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <FaRegHeart />
        <h3>Guardar en favoritos</h3>
      </div>
    </div>
  );
};
