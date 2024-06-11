import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
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
