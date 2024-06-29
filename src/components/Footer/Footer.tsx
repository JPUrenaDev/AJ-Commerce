import React, { useState } from "react";
import { PopularSearch } from "./PopularSearch";
import { IoIosArrowForward } from "react-icons/io";
import { RenderHelperFooterOptions } from "./RenderHelperFooterOptions";

const HelperFooterOptions = {
  help: ["Centro de ayuda", "Centro de ayuda", "Centro de ayuda"],
};

export const Footer = () => {
  const [onMouseOver, setOnMouseOver] = useState(false);
  const onMouseEnter = () => {
    setOnMouseOver(true);
  };

  const onMouseLeave = () => {
    setOnMouseOver(false);
  };
  return (
    <div className="w-full bg-white mt-4 h-[550px]">
      <PopularSearch />
      <div className="border border-gray-300"></div>

      <div className="flex w-full justify-center gap-7 mt-7   items-center">
        <div className="flex justify-start w-[400px] flex-wrap gap-2 self-start">
          <h2 className="font-semibold">
            <h2>¡Descarga la App y llévate a Corotos</h2>
            <span>a todas partes!</span>
          </h2>
          <div className="cursor-pointer">
            <div className="bg-black w-full h-full px-3 rounded-lg flex items-center gap-3 py-2">
              <img
                src="./image/1664285914google-play-logo-png.png"
                className="w-[25px] "
              ></img>
              <div>
                <h1 className="text-white text-[10px]">DISPONIBLE EN</h1>
                <h1 className="text-white text-[16px] font-bold">
                  Google Play
                </h1>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="bg-black w-full h-full px-3 rounded-lg flex items-center gap-3 py-2">
              <img
                src="./image/apple-icon-416x512-668hdbf2.png"
                className="w-[25px] "
              ></img>
              <div>
                <h1 className="text-white text-[10px]">Descargalo en el </h1>
                <h1 className="text-white text-[16px] font-bold">App Store</h1>
              </div>
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="bg-black w-full h-full px-3 rounded-lg flex items-center gap-3 py-2">
              <img
                src="./image/Huawei_AppGallery.svg.png"
                className="w-[25px] "
              ></img>
              <div>
                <h1 className="text-white text-[10px]">EXPLORALO EN</h1>
                <h1 className="text-white text-[16px] font-bold">AppGallery</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[200px]">
          <div className="flex flex-col self-start gap-5">
            <h2 className="font-semibold">Ayuda</h2>

            {HelperFooterOptions.help.map((help) => (
              <RenderHelperFooterOptions options={help} />
            ))}
          </div>
          <div className="flex flex-col justify-center self-start gap-5 ">
            <h2 className="font-semibold">J&A Commerce</h2>

            <h2>Centro de ayuda</h2>
            <h2>Uso y Reglas</h2>
            <h2>Contactanos</h2>
          </div>
          <div className="flex flex-col justify-center gap-5 ">
            <h2 className="font-semibold">Siguenos</h2>

            <h2>Facebook</h2>
            <h2>Instagram</h2>
            <h2>Youtube</h2>
            <h2>Linkedln</h2>
            <h2>Youtube</h2>
            <h2>TikTok</h2>
            <h2>Twitter</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
