import React from "react";
import { RenderPopularSearch } from "./RenderPopularSearch";
const popularSearch = [
  "Domestica",
  "santiago",
  "apartamento ",
  "Domestica",
  "santiago",
  "apartamento ",

  "Domestica",
  "santiago",
  "apartamento ",

  "Domestica",
  "santiago",
  "apartamento ",
  "Domestica",
  "santiago",
  "apartamento ",

  "Domestica",
  "santiago",
  "apartamento ",

  "Domestica",
  "santiago",
  "apartamento ",

  "Domestica",
  "santiago",
  "apartamento ",
];
export const PopularSearch = () => {
  return (
    <div className="pl-4">
      <h2 className="font-bold text-[20px] px-3 py-3">Búsquedas populares</h2>

      <div className="flex items-center gap-4 flex-wrap">
        {popularSearch.map((popular) => (
          <RenderPopularSearch popularSearch={popular} />
        ))}
      </div>
    </div>
  );
};
