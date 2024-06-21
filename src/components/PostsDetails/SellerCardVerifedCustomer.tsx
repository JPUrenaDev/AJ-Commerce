import React from "react";
import { SellerChat } from "./SellerChat";
import { Avatar } from "@mui/material";
import { ButtonModel } from "../ui/ButtonModel";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import AnimateHeight from "react-animate-height";
export const SellerCardVerifedCustomer = () => {
  const [isBlur, setIsBlur] = useState(true);
  const [modifyHeight, setModifyHeight] = useState(false);
  const [height, setHeight] = useState("");

  const onToggleBlur = () => {
    setIsBlur(!isBlur);
  };

  const onModifyHeight = () => {
    setHeight(height === 0 ? "auto" : 0);
  };
  return (
    <div>
      {" "}
      <div
        onMouseEnter={onModifyHeight}
        onMouseLeave={onModifyHeight}
        className={`transition-all duration-500 ease-in-out border border-gray-300 px-4 py-3 rounded-lg w-full ${
          modifyHeight ? "max-h-screen" : "max-h-23"
        }`}
      >
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
        <AnimateHeight
          id="example-panel"
          duration={500}
          height={height} // see props documentation below
        >
          <h1>Your content goes here</h1>
          <p>Put as many React or HTML components here.</p>
          <h1>Your content goes here</h1>
          <p>Put as many React or HTML components here.</p>
          <h1>Your content goes here</h1>
          <p>Put as many React or HTML components here.</p>
          <h1>Your content goes here</h1>
          <p>Put as many React or HTML components here.</p>
          <h1>Your content goes here</h1>
          <p>Put as many React or HTML components here.</p>
        </AnimateHeight>
      </div>
    </div>
  );
};
