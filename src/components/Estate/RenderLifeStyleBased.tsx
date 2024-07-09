import React from "react";
type itemsProps = {
  items: object;
};
export const RenderLifeStyleBased = ({ items }) => {
  return (
    <div>
      <div className="rounded-md  h-[280px] shadow-md text-center">
        <img className="w-[150px] h-[150px]" src={items.img}></img>;
        <h2 className="flex items-center justify-center w-[100%] mt-7 ">
          {items.title}
        </h2>
      </div>
    </div>
  );
};
