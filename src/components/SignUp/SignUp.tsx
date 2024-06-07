import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { PasswordCriteria } from "../../interface/Posts/types";

const regularExpression = [
  /\d/, // Números
  /[A-Z]/, // Letras mayúsculas
  /[a-z]/, // Letras minúsculas
  /[!@#$%^&*(),.?":{}|<>]/, // Caracteres especiales
];

export const SignUp = () => {
  const [actualPage, setActualPage] = useState<number>(1);
  const [PasswordCriteria, setPasswordCriteria] = useState<PasswordCriteria>({
    atLeastOneCapLock: false,
    atLeastOneLowerCase: false,
    atLeastOneNumber: false,
    atLeastOneSpecialCharacter: false,
    minimunCharacters: false,
  });

  const pages = Array.from("123");

  return (
    <div className="border-[04px] rounded-lg border-neutral-200 mt-4 bg-white w-[500px] mx-auto my-auto h-[800px] px-8 flex flex-col gap-6">
      <IoIosArrowRoundBack size={30} className="mt-5 cursor-pointer " />
      <h1 className="font-bold text-[30px] text-center">Regístrate</h1>

      <div className="flex gap-4 relative ">
        {pages.map((page, index) => (
          <span
            className={`${
              index + 1 <= actualPage ? "bg-blue-400" : "bg-zinc-300"
            } 
            ${index == 2 ? " w-[90px]" : "w-[140px]"} h-[08px]  rounded-lg `}
          ></span>
        ))}
        <FaCheckCircle
          className="absolute right-[-7px] bottom-[-13px]  text-zinc-300   "
          size={40}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-bold">Nombre para mostrar</label>
        <input
          placeholder="Introduce un nombre para mostrar"
          className="bg-white border-2 h-[40px] px-3"
        ></input>
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-bold">Correo electrónico</label>
        <input
          placeholder="Introduce tu Email:"
          className="bg-white border-2 h-[40px] px-3"
        ></input>
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-bold">Contraseña</label>
        <input
          placeholder="Introduce tu contraseña:"
          className="bg-white border-2 h-[40px] px-3"
        ></input>
      </div>
    </div>
  );
};
