import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  exampleRequired: string;
  password: string;
};

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const whenClickToEyeToShowPassword = () => {
    showPassword ? setShowPassword(!showPassword) : setShowPassword(true);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-[04px] rounded-lg border-neutral-200 mt-4 bg-white w-[500px] mx-auto my-auto h-[800px] px-8 flex flex-col gap-6"
    >
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
            className={`w-[430px] h-[40px] px-3 border-2 bg-sky-100 ${
              errors.email?.type == "required" ? "border-rose-600" : ""
            } `}
            type="email"
            placeholder="correo electronico"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          ></input>

          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-4 mb-5 relative">
          <label className="font-bold">Contraseña</label>

          <input
            className={`w-[430px] h-[40px] px-3 border-2 bg-sky-100 ${
              errors.password?.type == "required" ? "border-rose-600" : ""
            } `}
            placeholder="contrasena"
            id="password"
            {...register("password", { required: true, minLength: 12 })}
            aria-invalid={errors.password ? "true" : "false"}
            type={`${!showPassword ? "password" : "text"}`}
          ></input>

          {errors.password?.type === "required" && (
            <p className="text-red-400 font-bold" role="alert">
              Password is required
            </p>
          )}

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
    </form>
  );
};
