import React from "react";
import { SellerChat } from "./SellerChat";
import { Avatar } from "@mui/material";
import { ButtonModel } from "../ui/ButtonModel";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const SellerCardVerifedCustomer = () => {
  const [isBlur, setIsBlur] = useState(true);
  const [modifyHeight, setModifyHeight] = useState(false);

  const onToggleBlur = () => {
    setIsBlur(!isBlur);
  };
  return (
    <div>
      {" "}
      <div className="w-full h-[570px] border border-gray-300 px-3 py-3 rounded-lg">
        <div className="flex items-center gap-2 mb-6">
          <Avatar src="/broken-image.jpg" />
          <div className="flex flex-col">
            <h2 className="font-bold">Jean Urena</h2>
            <h3>
              Miembro desde : <span className="font-semibold">5 años</span>
            </h3>
            <h3 className="text-blue-400">Cuenta verificada</h3>

            <div className=" flex items-center text-white font-bold px-2 bg-rose-500 h-[30px] mt-3 w-[80px] rounded">
              <h2 className="py-2">AGENTE</h2>
            </div>
          </div>
        </div>
        <SellerChat />
        <div className="flex flex-col gap-5 mt-4">
          <ButtonModel
            width={"100%"}
            height={"35px"}
            bgColor={"white"}
            textColor={"black"}
          >
            <div className="flex items-center gap-4 justify-center">
              <MdOutlineMail color="blue" size={20} />
              Contactar vía correo electrónico
            </div>
          </ButtonModel>

          <ButtonModel
            width={"100%"}
            height={"35px"}
            bgColor={"white"}
            textColor={"black"}
          >
            <div className="flex items-center gap-4 justify-center">
              <FaWhatsapp color="blue" size={20} />
              Chatear vía WhatsApp
            </div>
          </ButtonModel>
        </div>
        <hr className="border-salate-500 w-full mt-5"></hr>

        <label>Telefonos:</label>
        <div className="flex items-center gap-2">
          <h2 className="text-blue-800 font-bold text-[15px]">
            (829) 929 <span className="blur-sm">7784</span>
          </h2>
          <MdOutlineHorizontalRule className="blur-sm" />
          <h2 className="blur-sm text-blue-800 font-bold text-[15px]">
            (849)-639-0454
          </h2>
          <ButtonModel
            width={"30%"}
            height={"40px"}
            bgColor={"white"}
            textColor={"blue"}
          >
            Mostrar
          </ButtonModel>
        </div>
        <hr className="border-salate-500 w-full mt-5"></hr>
        <div>
          <h2>Sitio web:</h2>
          <label>https://maps.app.goo.gl/B16QDb63jz4rTzhd6</label>
        </div>
      </div>
    </div>
  );
};
