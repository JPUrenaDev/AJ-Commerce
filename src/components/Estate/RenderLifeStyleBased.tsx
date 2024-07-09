import React from "react";
type itemsProps = {
  items: object;
};
export const RenderLifeStyleBased = ({ items }) => {
  return (
    <>
      <div className="flex-shrink-0 w-[235px] h-[230px]  p-2 rounded-md shadow-md">
        <img className="w-[300px] h-[150px]" src={items.img}></img>
        <h2 className="flex items-center justify-center w-[100%] mt-3 ">
          {items.title}
        </h2>
      </div>
    </>
  );
};
