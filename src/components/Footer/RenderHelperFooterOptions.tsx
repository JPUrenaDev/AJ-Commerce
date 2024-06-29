import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

type RenderHelperFooterOptionsProps = {
  options: string;
};
export const RenderHelperFooterOptions = ({
  options,
}: RenderHelperFooterOptionsProps) => {
  const [onMouseOver, setOnMouseOver] = useState(false);
  const onMouseEnter = () => {
    setOnMouseOver(true);
  };

  const onMouseLeave = () => {
    setOnMouseOver(false);
  };
  return (
    <div
      className={`flex items-center gap-3 w-[150px] ${
        onMouseOver && "text-blue-900 font-semibold"
      }`}
    >
      <h1
        className={`cursor-pointer `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {options}
      </h1>
      {onMouseOver && <IoIosArrowForward />}
    </div>
  );
};
