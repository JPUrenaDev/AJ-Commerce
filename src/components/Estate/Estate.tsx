import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaLaptopHouse } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CarouselComponent } from "./Carousel";
import { Recommended } from "./Recommended";
import { SellYourEstate } from "./SellYourEstate";
import { OurAgents } from "./OurAgents";
import { Category } from "./Category";
import { RecentPosts } from "./RecentPosts";
import { LifestyleBased } from "./LifestyleBased";

export const Estate = () => {
  return (
    <>
      <div className="flex-grow w-full h-full  mt-[-100px] ml-[200px]  flex items-center justify-between ">
        <div className="w-1/3  flex flex-col items-center font-bold text-blue-900">
          <h2 className="text-black">INMUEBLES</h2>
          <h1 className="text-[30px]">
            Descubre la Propiedad de tu <br></br>
          </h1>
          <h1 className="text-[30px]">Sueños en Corotos</h1>

          <div className="bg-[#E5EEFA] w-[600px] h-[130px] rounded-md">
            <div className="flex items-center justify-center gap-3 pt-1">
              <Link to={"/"}>Todos</Link>
              <Link to={"/"}>Venta</Link>
              <Link to={"/"}>Alquiler</Link>
            </div>
            <div className="flex items-center px-3 mt-4 relative gap-3 mt-[33px] w-full ">
              <input className="w-[33%] h-[50px] rounded-md px-2 cursor-pointer"></input>
              <div className="absolute flex gap-4 items-center left-[30px] cursor-pointer">
                <HiOutlineBuildingOffice2 />
                <h2 className="text-gray-500 ">Inmuebles</h2>
                <IoIosArrowDown className=" text-blue-900  " size={24} />
              </div>

              <div className="flex items-center gap-5 absolute  left-[230px] cursor-pointer">
                <BsCurrencyDollar className=" text-blue-900  " size={24} />
                <h2 className="text-gray-500">Precio</h2>
                <IoIosArrowDown className=" text-blue-900  " size={24} />
              </div>

              <input className="w-[33%] h-[50px] rounded-md px-2 cursor-pointer"></input>

              <input className="w-[33%] h-[50px] rounded-md px-2 cursor-pointer "></input>
              <div className="flex items-center gap-5 absolute  left-[420px]  cursor-pointer ">
                <HiLocationMarker className="text-blue-900  " size={24} />
                <h2 className="text-gray-500">Precio</h2>
                <IoIosArrowDown className="text-blue-900" size={24} />
              </div>
            </div>
          </div>
          <div className="w-full mt-3 ">
            <button className="bg-yellow-400 w-full rounded-full h-[40px] shadow-md">
              Realizar búsqueda
            </button>
          </div>
        </div>
        <div>
          <img src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRTZIaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c3f70995b50e931f381fb5dc451cfeb1fbe97acf/ilustracion%20inmueble%202.png"></img>
        </div>
      </div>
      <CarouselComponent />
      <Recommended />
      <SellYourEstate />
      <OurAgents />
      <Category />
      <RecentPosts />
      <LifestyleBased />
    </>
  );
};
