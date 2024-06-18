import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ChangePagePostsDetails } from "./ChangePagePostsDetails";
export const PostsDetails = () => {
  return (
    <div className="flex items-start mt-4">
      <div className="flex items-center">
        <div className="rounded-r-lg bg-black w-[35px]  py-[20px] mr-4 ml-4 opacity-75 ml-1 cursor-pointer">
          <IoIosArrowBack size={30} color="white" className="" />
        </div>
        <img
          className="object-cover w-[400px] h-[400px] px-9 cursor-zoom-in"
          src="https://www.corotos.com.do/imagenes/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCUExSaGdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--899aa1bd92789a9d98b9d42cb8978310ef694589/aeb6d040_f977_4e2e_a512_e20644a8d6d1_jpg?variant_options%5Bformat%5D=webp&variant_options%5Bresize_to_fit%5D%5B%5D=1280&variant_options%5Bresize_to_fit%5D%5B%5D=720"
        ></img>
        <div className="rounded-l-lg bg-black w-[35px]  py-[20px] mr-4 ml-4 opacity-75 pl-1 cursor-pointer">
          <IoIosArrowForward size={30} color="white" />
        </div>
      </div>
      <div>
        <hr className="border-gray-500"></hr>
        <ChangePagePostsDetails />
        <hr className="border-gray-500"></hr>
        <div>
          <h1 className="font-bold">Uniforme Militar ERD</h1>
          <h2>RD$ 675</h2>
          <label>Publicado: 17 de abril de 2024</label>
        </div>
      </div>
    </div>
  );
};
