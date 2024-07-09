import React, { ReactNode } from "react";
type contentCategoryProps = {
  id: boolean;
  icon: ReactNode;
};

type RenderCategoryProps = {
  category: contentCategoryProps;
};
export const RenderCategory = ({ category }: RenderCategoryProps) => {
  return (
    <div className="cursor-pointer bg-white rounded-full w-[90px] h-[80px] shadow-2xl flex items-center justify-center">
      {category.icon}
    </div>
  );
};
