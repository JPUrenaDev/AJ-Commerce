import React from "react";
import { RenderLifeStyleBased } from "./RenderLifeStyleBased";

const lifeStyleBasedItems = [
  {
    id: 1,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCQ2lIaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f00f5ed7217aa29c474dda36200dc62c4146a7e1/Imagen%202.png",
    title: "Tu hogar en la Playa",
  },
  {
    id: 2,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRHlIaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--abc6c6dfdee0b350a27fd193228686b8de57eedb/Imagen%203.png",
    title: "Tu Primera Inversión",
  },
  {
    id: 1,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSXVIaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4dc82c563377bd4f2b997a857a38ce52e560385a/Imagen%201.png",
    title: "Muebles para tu Hogar",
  },
  {
    id: 1,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCT2FIaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--54de0cb98a15db33a1b654e2583085ddb609c7c4/vacaciones.jpeg",
    title: "Tus próximas Vacaiones",
  },
];

export const LifestyleBased = () => {
  return (
    <div className=" mt-[50px]    mx-auto   w-[60rem]  ">
      <h1 className="font-bold text-[24px] text-blue-800">
        Según tu Estilo de Vida
      </h1>
      <div className="flex gap-2 items-center overflow-x-hidden py-3 justify-center  whitespace-nowrap">
        {lifeStyleBasedItems.map((items) => {
          return <RenderLifeStyleBased items={items} />;
        })}
      </div>
    </div>
  );
};
