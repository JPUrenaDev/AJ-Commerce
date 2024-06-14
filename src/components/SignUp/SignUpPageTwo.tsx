import { ProgressPage } from "./ui/ProgressPage";
import { IFormInput } from "../../interface/Posts/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  advanceNextPage,
  dontAdvanceNextPage,
} from "../../redux/changePageSliceSignUp";
import { RootState } from "../../redux/store";

import { ButtonContinueSignUp } from "./ui/ButtonContinueSignUp";
import { Link } from "react-router-dom";
export const SignUpPageTwo = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { isValid },
  } = useForm<IFormInput>({ mode: "onChange" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    isValid ? dispatch(advanceNextPage()) : dispatch(dontAdvanceNextPage());
  };

  const accountInformation = useSelector(
    (state: RootState) => state.counter.accountInformation
  );
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`pb-[20px] pt-[20px] border-[04px] rounded-lg border-neutral-200 mt-4 bg-white w-[500px] mx-auto my-auto h-[full] px-8 flex flex-col gap-6`}
      >
        <IoIosArrowRoundBack
          onClick={() => dispatch(dontAdvanceNextPage())}
          size={30}
          className="mt-5 cursor-pointer "
        />
        <h1 className="font-bold text-[24px] text-center">
          !Verifica tu correo!
        </h1>
        <ProgressPage />
        <h3 className="text-[19px] text-center">
          Te hemos enviado un código al correo
          <strong> {accountInformation.email}</strong> para verificar tu cuenta.
        </h3>

        <h3>Introduce el código aquí</h3>
        <input
          {...register("userName", { required: true, minLength: 5 })}
          placeholder={"Escribe el código aquí"}
          className="bg-white border-2 h-[40px] px-3 border-zinc-500 rounded-md"
        ></input>

        <ButtonContinueSignUp />
        <label className="mb-4 text-center">
          No recibiste el código?{" "}
          <Link to={"/"} className="text-blue-400">
            Reenviar
          </Link>{" "}
          <br></br>
        </label>

        <label className="text-center">
          Al continuar, aceptas los Términos de Uso y la Politica de Privacidad
          de JYA
        </label>
      </form>
    </>
  );
};
