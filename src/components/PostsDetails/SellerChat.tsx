import React from "react";
import { ButtonModel } from "../ui/ButtonModel";

export const SellerChat = () => {
  return (
    <div className=" bg-sky-50 h-[99px] border border-indigo-300  py-2   rounded-lg ">
      <div className="px-3">
        <h3 className="font-medium text-[13px] mb-2">
          Chatear con el vendedor
        </h3>
        <div className="flex items-center gap-3 ">
          <input
            placeholder="Hola,Esta disponible?"
            className="border  w-[250px] h-[40px] rounded-lg px-2"
          ></input>

          <ButtonModel
            width={"80px"}
            height={"30px"}
            bgColor={"#1E90FF"}
            textColor={"white"}
          >
            Enviar
          </ButtonModel>
        </div>
      </div>

      <div className="mt-10">
        <ButtonModel
          width={"100%"}
          height={"30px"}
          bgColor={"white"}
          textColor={"black"}
        >
          Ver telefono
        </ButtonModel>
      </div>
    </div>
  );
};
