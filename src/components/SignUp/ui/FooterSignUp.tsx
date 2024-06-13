import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const FooterSignUp = () => {
  return (
    <div>
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
    </div>
  );
};
