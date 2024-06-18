import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { SellerChat } from "./SellerChat";
export const SellerCard = () => {
  return (
    <>
      <div className="w-full h-[250px] border border-gray-300 px-3 py-3 rounded-lg">
        <div className="flex items-center gap-2 mb-6">
          <Avatar src="/broken-image.jpg" />
          <div className="flex flex-col">
            <h2>Jean Urena</h2>
            <h3>Cuenta creada hace más de 5 años</h3>
          </div>
        </div>
        <SellerChat />
      </div>
    </>
  );
};
