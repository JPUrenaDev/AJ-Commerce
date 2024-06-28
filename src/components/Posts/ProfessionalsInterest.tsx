import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const ProfessionalsInterest = () => {
  return (
    <div className="bg-white rounded-lg w-[1080px] h-[200px] mx-auto mt-4 px-4">
      <h2 className="font-bold text-[20px] mb-3 pt-3">
        Profesionales de interés
      </h2>

      <div className="flex items-center gap-3">
        <div className="border border-gray-400 h-[84px]  justify-between w-[700px] rounded-lg flex items-center shadow-lg px-4 py-3 flex  cursor-pointer ">
          <img
            className="w-[60px] h-[50px] object-cover"
            src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRnk2Z0FJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--28e5710cb965fd1e2221cb47ef9ecd7a74a1386b/LOGO-02%20(2).png"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">Espacio Inmobiliario RD</h1>
            <label>173 anuncios</label>
          </div>
          <IoIosArrowForward size={24} />
        </div>
        <div className="border border-gray-400 h-[84px]  justify-between w-[700px] rounded-lg flex items-center shadow-lg px-4 py-3 flex  cursor-pointer ">
          {" "}
          <img
            className="w-[60px] h-[50px] object-cover"
            src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRnk2Z0FJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--28e5710cb965fd1e2221cb47ef9ecd7a74a1386b/LOGO-02%20(2).png"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">Espacio Inmobiliario RD</h1>
            <label>173 anuncios</label>
          </div>
          <IoIosArrowForward size={24} />
        </div>
        <div className="border border-gray-400 h-[84px]  justify-between w-[700px] rounded-lg flex items-center shadow-lg px-4 py-3 flex  cursor-pointer ">
          {" "}
          <img
            className="w-[60px] h-[50px] object-cover"
            src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRnk2Z0FJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--28e5710cb965fd1e2221cb47ef9ecd7a74a1386b/LOGO-02%20(2).png"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">Espacio Inmobiliario RD</h1>
            <label>173 anuncios</label>
          </div>
          <IoIosArrowForward size={24} />
        </div>
      </div>
    </div>
  );
};
