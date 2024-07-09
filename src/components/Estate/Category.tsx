import React from "react";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHouseChimney } from "react-icons/fa6";
import { RenderCategory } from "./RenderCategory";
import { FaBuildingWheat } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdOutlineForest } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import { GiHut } from "react-icons/gi";

const iconProperties = {
  color: "#1e3a8a",
  size: 30,
};
const category = [
  {
    id: 1,
    icon: (
      <HiMiniBuildingOffice
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Apartamento",
  },
  {
    id: 2,
    icon: (
      <FaHouseChimney
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Casas",
  },
  {
    id: 3,
    icon: (
      <FaBuildingWheat
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Penthouse",
  },
  {
    id: 4,
    icon: (
      <FaUmbrellaBeach
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Vacaciones",
  },
  {
    id: 5,
    icon: (
      <FaShop
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Oficinas y Locales",
  },
  {
    id: 5,
    icon: (
      <MdOutlineForest
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Solares",
  },
  {
    id: 5,
    icon: (
      <IoBedOutline
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Habitaciones",
  },
  {
    id: 5,
    icon: (
      <GiHut
        size={iconProperties.size}
        style={{ color: iconProperties.color }}
      />
    ),
    title: "Otros",
  },
];

export const Category = () => {
  return (
    <div className=" mt-[50px]    mx-auto   w-[60rem] ">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-[24px] text-blue-800">Categorias</h1>
        <div className="flex items-center gap-2 text-blue-800 font-bold">
          <h2>Ver más</h2>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex items-center justify-between ml-5 gap-[50px] mt-5">
        {category.map((category) => {
          return <RenderCategory category={category} />;
        })}
      </div>
    </div>
  );
};
