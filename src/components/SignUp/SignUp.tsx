import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

export const SignUp = () => {
  const [actualPage, setActualPage] = useState<number>(1);
  const pages = Array.from("123");

  return (
    <div className="border-[04px] rounded-lg border-neutral-200 mt-4 bg-white w-[500px] mx-auto my-auto h-[800px] px-8 flex flex-col gap-6">
      <IoIosArrowRoundBack size={30} className="mt-5" />
      <h1 className="font-bold text-[30px] text-center">Regístrate</h1>

      <div className="flex gap-4 relative ">
        {pages.map((page, index) => (
          <span
            className={`${
              index + 1 <= actualPage ? "bg-blue-400" : "bg-zinc-400"
            } 
            ${index == 2 ? " w-[90px]" : "w-[140px]"} h-[14px]  w-rounded-lg `}
          ></span>
        ))}
        <FaCheckCircle
          className="absolute right-[-10px] bottom-[-12px]  "
          size={40}
          color="gray"
          fill="gray"
        />
      </div>
    </div>
  );
};
