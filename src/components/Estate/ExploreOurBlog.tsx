import React from "react";

import { IoIosArrowForward } from "react-icons/io";
export const ExploreOurBlog = () => {
  return (
    <div className=" mt-[50px]    mx-auto   w-[60rem] ">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-[24px] text-blue-800">
          Conoce nuestro blog
        </h1>
        <div className="flex items-center gap-2 text-blue-800 font-bold">
          <h2>Ver más</h2>
          <IoIosArrowForward />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 ">
        <div className="rounded-md w-[600px] h-[150px] shadow-md flex gap-3 items-center items-center pl-2 border border-gray-300 ">
          <img
            className="h-[90px] w-[200px]"
            src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCQVEraXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--49f21be487b811378398ce75382d96d99646681f/Blog%20RE%201.webp"
          ></img>
          <div>
            <h3>Corots Blog</h3>
            <h3 className="font-bold">Guia inmobiliaria:err...</h3>
            <button className="bg-orange-500 font-bold text-white px-3 rounded-md">
              Ver más
            </button>
          </div>
        </div>
        <div className="rounded-md w-[600px] h-[150px] shadow-md flex gap-3 items-center items-center pl-2 border border-gray-300 ">
          <img
            className="h-[90px] w-[200px]"
            src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCQWcraXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ffc127749c916a881c295361d8ba5d45b5033667/Blog%20RE%202.webp"
          ></img>
          <div>
            <h3>Corots Blog</h3>
            <h3 className="font-bold">Guia inmobiliaria:err...</h3>
            <button className="bg-orange-500 font-bold text-white px-3 rounded-md">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
