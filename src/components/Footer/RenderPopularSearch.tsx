import React from "react";

type RenderPopularSearchProps = {
  popularSearch: string;
};
export const RenderPopularSearch = ({
  popularSearch,
}: RenderPopularSearchProps) => {
  return (
    <div className="cursor-pointer border rounded-full p-2 border-gray-400 text-blue-900 mb-4 font-semibold">
      {popularSearch}
    </div>
  );
};
