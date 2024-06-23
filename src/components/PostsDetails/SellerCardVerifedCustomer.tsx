import React from "react";
import { SellerChat } from "./SellerChat";
import { Avatar } from "@mui/material";
import { ButtonModel } from "../ui/ButtonModel";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { AiFillTool } from "react-icons/ai";
import AnimateHeight from "react-animate-height";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
export const SellerCardVerifedCustomer = () => {
  const [isBlur, setIsBlur] = useState(true);

  const [height, setHeight] = useState(0);

  const onToggleBlur = () => {
    setIsBlur(!isBlur);
  };

  const onModifyHeight = () => {
    setHeight(height === 0 ? "auto" : 0);
  };
  return (
    <div
      onMouseEnter={onModifyHeight}
      onMouseLeave={onModifyHeight}
      className={` border border-gray-300 px-4 py-3 rounded-lg w-full cursor-pointer  `}
    >
      <div className="flex items-center gap-8 mb-6">
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
          (829) 929 <span className={` ${isBlur ? "blur-sm" : ""}`}>7784</span>
        </h2>
        <MdOutlineHorizontalRule className={` ${isBlur ? "blur-sm" : ""}`} />
        <h2
          className={` ${
            isBlur ? "blur-sm" : ""
          } text-blue-800 font-bold text-[15px]`}
        >
          (849)-639-0454
        </h2>
        {isBlur && (
          <ButtonModel
            width={"30%"}
            height={"40px"}
            bgColor={"white"}
            textColor={"black"}
            hasFuntion={onToggleBlur}
          >
            <MdOutlineRemoveRedEye />
            Mostrar
          </ButtonModel>
        )}
      </div>
      <hr className="border-salate-500 w-full mt-5"></hr>
      <div>
        <h2>Sitio web:</h2>
        <label>https://maps.app.goo.gl/B16QDb63jz4rTzhd6</label>
        <hr className="border-salate-500 w-full mt-5"></hr>
      </div>
      <AnimateHeight
        id="example-panel"
        duration={1400}
        height={height} // see props documentation below
      >
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col items-center w-1/3 px-2">
            <AiFillTool size={33} />
            <p className="text-[10px]">MANTENIMIENTO</p>
          </div>
          <div className="flex flex-col items-center w-1/3 px-2">
            <FaRegCreditCard size={33} />
            <p className="text-[10px]">TARJETA DE CREDITO</p>
          </div>
          <div className="flex flex-col items-center w-1/3 px-2">
            <FaTruck size={33} />
            <p className="text-[10px]">DELIVERY</p>
          </div>
          <div className="flex flex-col items-center w-1/3 px-2">
            <IoShieldCheckmark size={33} />
            <p className="text-[10px]">GARANTIA</p>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
};
