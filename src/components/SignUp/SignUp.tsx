import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useRef } from "react";

import { FaRegCircle } from "react-icons/fa";

interface IFormInput {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
}
const passwordCriteriasOptions = [
  "Mínimo 12 caracteres",
  "Al menos un número",
  "Al menos una letra mayúscula",
  "Al menos una letra minúscula",
  "Al menos un carácter especial (~!@#$%^&*_-+=|(){}[]:;<>?)",
];

export const SignUp = () => {
  //this code is to figured out how many times this component has been rendered.
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  //this code is to figured out how many times this component has been rendered.
  const [actualPage, setActualPage] = useState<number>(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const pages = Array.from("123");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-[04px] rounded-lg border-neutral-200 mt-4 bg-white w-[500px] mx-auto my-auto h-[1000px] px-8 flex flex-col gap-6"
    >
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
          {...register("userName", { required: true, minLength: 5 })}
          placeholder="Introduce un nombre para mostrar"
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
        ></input>
        {errors?.userName?.type === "minLength" && (
          <p>You must insert a username with at least 5 characters</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-bold">Correo electrónico</label>
        <input
          {...register("email", {
            required: "Email is required",

            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          placeholder="Introduce tu Email:"
          className="bg-white border-2 border-zinc-500 h-[40px] px-3 rounded-md"
        ></input>
        {errors.email?.message && <p>{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-bold">Contraseña</label>
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 12,
              message: "password must have at least 12 characters long",
            },
            validate: {
              isUpper: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) ||
                  "You must choose a password that cointains special chars, only lower, upper, number"
                );
              },
            },
          })}
          type="password"
          placeholder="Introduce tu contraseña:"
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
        ></input>
      </div>

      <div className="flex flex-col gap-2">
        {passwordCriteriasOptions.map((values) => {
          return (
            <div className="flex items-center gap-2">
              {(errors.password?.message && renderCount.current >= 1) ||
              renderCount.current == 0 ||
              errors.password?.message?.length == 0 ? (
                <FaRegCircle />
              ) : (
                <FaRegCheckCircle className="text-yellow-300" />
              )}

              <h4>{values}</h4>
            </div>
          );
        })}

        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>

      {console.log()}
      <div className="flex flex-col gap-3">
        <label className="font-bold">Confirmar Contraseña</label>
        <input
          placeholder="Confirme su Contraseña:"
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
          type="password"
        ></input>
      </div>
      <button className="bg-slate-500  mx-auto  w-[430px] h-[50px] text-white rounded-md ">
        Continuar
      </button>
      <hr className="border-zinc-500"></hr>
      <p>
        Al continuar, aceptas los{" "}
        <Link className="text-blue-400" to={"/"}>
          Términos de Uso
        </Link>{" "}
        y la{" "}
        <Link className="text-blue-400" to={"/"}>
          Política de Privacidad
        </Link>{" "}
        de Corotos.
      </p>
    </form>
  );
};