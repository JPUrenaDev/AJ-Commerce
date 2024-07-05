import React, { useState } from "react";
import { RenderRecommended } from "./RenderRecommended";

const recommendedPosts = [
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
  {
    id: 1,
    title: "Alquiler de fabuloso",
    img: "https://img.corotos.com.do/variants/um9aa1k9oxtn7i2oiqcmlwfkj2wn/1aa4814e4cfd3605c8ddf6f67511bdceb82eb0af2f44c7aba491a3389bb10290",
    businessType: "Agente",
    type: "alquiler",
    price: "4500",
    user: "Doris Gutierrez",
    isVerify: true,
  },
];
export const Recommended = () => {
  const [showScrollX, setShowScrollX] = useState(false);

  const onMouseEnter = () => {
    setShowScrollX(true);
  };

  const onMouseLeave = () => {
    setShowScrollX(false);
  };
  return (
    <div
      className={`w-[55%] ${
        showScrollX ? "overflow-x-auto" : "overflow-x-hidden"
      }  mt-[80px] ml-[410px]  `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex gap-3 items-center">
        {recommendedPosts.map((post, index) => (
          <div key={index} className=" w-48">
            <RenderRecommended posts={post} />
          </div>
        ))}
      </div>
    </div>
  );
};
