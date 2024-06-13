import { useForm, SubmitHandler } from "react-hook-form";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useRef } from "react";
import { RootState } from "../../redux/store";
import { passwordCriteriasOptions } from "./helper/passwordCriteriaOptions";
import {
  dontAdvanceNextPage,
  advanceNextPage,
} from "../../redux/changePageSliceSignUp";

import { IFormInput } from "../../interface/Posts/types";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCircle } from "react-icons/fa";
import { ProgressPage } from "./ui/ProgressPage";

import { FooterSignUp } from "./ui/FooterSignUp";
import { ButtonContinueSignUp } from "./ui/ButtonContinueSignUp";

import { IoIosArrowRoundBack } from "react-icons/io";

export const SignUpPageOne = () => {
  //this code is to figured out how many times this component has been rendered.

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  //this code is to figured out how many times this component has been rendered.
  const dispatch = useDispatch();
  const actualPage = useSelector((state: RootState) => state.counter?.value);

  //this code is to figured out how many times this component has been rendered.

  //update sign up page (register)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ mode: "onChange" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    isValid ? dispatch(advanceNextPage()) : dispatch(dontAdvanceNextPage());
  };

  const pages = Array.from("123");
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`border-[04px] rounded-lg border-neutral-200 mt-4 bg-white w-[500px] mx-auto my-auto h-[full] px-8 flex flex-col gap-6`}
    >
      <IoIosArrowRoundBack size={30} className="mt-5 cursor-pointer " />
      <h1 className="font-bold text-[30px] text-center">Regístrate</h1>
      <ProgressPage />
      <div className="flex flex-col gap-3">
        <label className="font-bold">Nombre para mostrar</label>

        <input
          {...register("userName", { required: true, minLength: 5 })}
          placeholder={"Inserte su username"}
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
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
        ></input>
        {errors.email?.message && <p>{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-3">
        <label className="font-bold">Contraseña</label>

        <input
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
          type="password"
          placeholder={"Introduce tu contraseña"}
          {...register("password", {
            required: true,
            minLength: {
              value: 12,
              message: "password must have at least 12 characters long",
            },
            validate: {
              passwordRules: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[$&+,:;=?@#|'<>.^*()%!-]/].every(
                    (pattern) => pattern.test(value)
                  ) ||
                  "You must choose a password that cointains special chars, only lower, upper, number"
                );
              },
            },
          })}
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        {passwordCriteriasOptions.map((values) => {
          return (
            <div className="flex items-center gap-2">
              {errors.password?.message && watch("password")?.length >= 1 ? (
                <FaRegCircle />
              ) : !errors.password?.message &&
                watch("password")?.length >= 1 ? (
                <FaRegCheckCircle className="text-yellow-300" />
              ) : (
                !watch("password") && <FaRegCircle />
              )}

              <h4>{values}</h4>
            </div>
          );
        })}

        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-bold">Confirmar Contraseña</label>
        <input
          placeholder="Confirme su Contraseña:"
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
          type="password"
        ></input>
      </div>
      <ButtonContinueSignUp />
      <FooterSignUp />
    </form>
  );
};
