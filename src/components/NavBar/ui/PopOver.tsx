import React, { cloneElement, useState } from "react";
import { Link } from "react-router-dom";

export const PopOver = ({ children }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    //APPLYING CLONE ELEMENT JUST TO MAKE SURE I CAN USE THE ONCLICK METHOD (CHILDREN IS A BUTTON IS COMMING FROM THE SEARCHCATEGORY COMPONENT)
    <div className="relative">
      {cloneElement(children, {
        onMouseEnter: () => {
          togglePopover();
        },
      })}
      {isPopoverOpen && (
        <div onMouseLeave={togglePopover}>
          <div
            id="popover-bottom"
            role="tooltip"
            className="h-[540px] shadow-xl bg-gray-100 absolute z-10 flex gap-[9px] visible inline-block w-[590px]  top-11 right-2 left-3 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="w-1/2 bg-white">
              <div className="px-3 flex  items-center justify-between    border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className=" py-3 mb-2 font-bold text-gray-900 text-[20px] dark:text-white">
                  Categorías
                </h3>
                <Link className="text-blue-700" to={"/"}>
                  Ver todas
                </Link>
              </div>
              <div className=" relative top-3 mt-2 px-3   gap-4 space-y-1  grid grid-cols-1 divide-y">
                <Link to={"/"}>Inmuebles</Link>
                <Link className="pt-2" to={"/"}>
                  Vehículos
                </Link>
                <Link className="pt-2" to={"/"}>
                  Hogar
                </Link>
                <Link className="pt-2" to={"/"}>
                  Bebés y Niños
                </Link>
                <Link className="pt-2" to={"/"}>
                  Moda y Belleza
                </Link>
                <Link className="pt-2" to={"/"}>
                  Deportes y Entretenimiento
                </Link>
                <Link className="pt-2" to={"/"}>
                  Electrónica
                </Link>
                <Link className="pt-2" to={"/"}>
                  Empleo
                </Link>
                <Link className="pt-2" to={"/"}>
                  Negocios y Servicios
                </Link>
                <Link className="pt-2" to={"/"}>
                  Otros
                </Link>
              </div>
              <div data-popper-arrow></div>
            </div>
            <div className="w-1/2 flex flex-col gap-3 ">
              <div className="bg-white h-[210px]  pl-3 flex flex-col  ">
                <h3 className=" py-2 pl-3  font-bold text-gray-900 text-[20px] dark:text-white">
                  Otras opciones
                </h3>
                <div className=" relative top-3 mt-1 px-2   gap-4   grid grid-cols-1 divide-y">
                  <Link to={"/"} className="pt-1">
                    Blog
                  </Link>
                  <Link to={"/"} className="pt-1">
                    Directorio
                  </Link>

                  <Link to={"/"} className="pt-1">
                    Soluciones para vendedores
                  </Link>
                  <Link to={"/"} className="pt-1">
                    Proyectos By J&A Commerce
                  </Link>
                </div>
              </div>
              <div className="h-[300px] mt-3 bg-white pl-3  ">
                <h3 className=" py-3 mb-2 font-bold text-gray-900 text-[20px] dark:text-white">
                  Ayudas y ajustes
                </h3>
                <div className="relative top-3 mt-1 px-2   gap-4   grid grid-cols-1 divide-y">
                  <Link to={"/"} className="pt-1">
                    Mi Cuenta
                  </Link>
                  <Link to={"/"} className="pt-1">
                    ¿Necesitas ayuda?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
