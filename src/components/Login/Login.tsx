import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const whenClickToEyeToShowPassword = () => {
    showPassword ? setShowPassword(!showPassword) : setShowPassword(true);
  };
  return (
    <div className="border-[04px] rounded-lg border-neutral-200 mt-4 bg-white w-[500px] mx-auto my-auto h-[800px] px-8 flex flex-col gap-6">
      <div>
        <img
          className="mx-auto"
          width={200}
          src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
        ></img>
      </div>
      <div>
        <div className="text-center mb-[40px]">
          <h1 className="font-bold text-[20px] ">
            Inicia sesión para vender y <br></br>comprar en J&A store
          </h1>
          <h3 className="text-zinc-500">
            Escribe tu correo electrónico para iniciar sesión.
          </h3>
        </div>
        <div className="flex flex-col gap-4 mb-5">
          <label className="font-bold">Correo electrónico</label>

          <input
            className="bg-sky-100 w-[430px] h-[40px] px-3"
            type="email"
            placeholder="correo electronico"
          ></input>
        </div>
        <div className="flex flex-col gap-4 mb-5 relative">
          <label className="font-bold">Contraseña</label>

          <input
            className="bg-sky-100 w-[430px] h-[40px] px-3"
            placeholder="contrasena"
            id="password"
            type={`${!showPassword ? "password" : "text"}`}
          ></input>

          {showPassword ? (
            <IoIosEye
              className="absolute  top-[45px] right-[10px] cursor-pointer"
              onClick={(e) => whenClickToEyeToShowPassword()}
              size={30}
            />
          ) : (
            <FaRegEyeSlash
              className="absolute  top-[45px] right-[10px] cursor-pointer"
              onClick={(e) => whenClickToEyeToShowPassword()}
              size={30}
            />
          )}
        </div>
      </div>
      <Link className="text-blue-500 font-bold text-center" to={"/"}>
        Olvidé mi contraseña
      </Link>

      <button className="bg-slate-500  mx-auto  w-[430px] h-[50px] text-white">
        Continuar
      </button>
      <hr className="mt-4"></hr>
      <h3 className="text-zinc-500 text-center">
        ¿No tienes cuenta?{" "}
        <Link className="text-blue-500 font-bold" to={"/"}>
          Registrate
        </Link>
      </h3>
    </div>
  );
};
