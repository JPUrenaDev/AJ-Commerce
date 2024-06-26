import Avatar from "@mui/material/Avatar";

import { ButtonModel } from "../ui/ButtonModel";
import { SellerChat } from "./SellerChat";
export const SellerCard = () => {
  return (
    <>
      <div className="w-full h-[300px] border border-gray-300 px-3 py-3 rounded-lg">
        <div className="flex items-center gap-2 mb-6">
          <Avatar src="/broken-image.jpg" />
          <div className="flex flex-col">
            <h2>Jean Urena</h2>
            <h3>Cuenta creada hace más de 5 años</h3>
          </div>
        </div>
        <SellerChat />

        <div className="mt-10">
          <ButtonModel
            width={"100%"}
            height={"35px"}
            bgColor={"white"}
            textColor={"blue"}
          >
            Ver telefono
          </ButtonModel>
        </div>
      </div>
    </>
  );
};
