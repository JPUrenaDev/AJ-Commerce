import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
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
  const [actualPage, setActualPage] = useState<number>(1);
  const [passwordCriteriaState, setPasswordCriteriaState] = useState<object>({
    minCharacters: false,
    atLeastOneNumber: false,
    atLeastOneCapLock: false,
    atLeastOneLowerCase: false,
    atLeastOneSpecialCharacter: false,
  });

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
            validate: {
              isUpper: (value) => /[a-z]/.test(value) || "Lower",
              isLower: (value) => /[A-Z]/.test(value) || "Upper",
              isNumber: (value) => /[0-9]/.test(value) || "Number",
            },
            // pattern: { value: /[a-z]/, message: "lowerCase" },
          })}
          type="password"
          placeholder="Introduce tu contraseña:"
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
        ></input>
      </div>
      {console.log(errors.password?.message)}

      <div className="flex flex-col gap-2">
        {passwordCriteriasOptions.map((values) => {
          return (
            <div className="flex items-center gap-2">
              <h4 className="rounded-full w-[20px] h-[20px] border-2 border-zinc-500 "></h4>
              <h4>{values}</h4>
            </div>
          );
        })}
      </div>
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
