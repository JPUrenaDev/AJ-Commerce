import React, { useState } from "react";
import { RenderRecommended } from "./RenderRecommended";
import { IoIosArrowForward } from "react-icons/io";
const RecentPostsItems = [
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
export const RecentPosts = () => {
  const [showScrollX, setShowScrollX] = useState(false);

  const onMouseEnter = () => {
    setShowScrollX(true);
  };

  const onMouseLeave = () => {
    setShowScrollX(false);
  };
  return (
    <div className=" mt-[50px]    mx-auto   w-[60rem] ">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-[24px] text-blue-800">
          Publicaciones Recientes
        </h1>
        <div className="flex items-center gap-2 text-blue-800 font-bold">
          <h2>Ver más</h2>
          <IoIosArrowForward />
        </div>
      </div>
      <div
        className={`  ${
          showScrollX ? "overflow-x-auto" : "overflow-x-hidden"
        }  mt-[50px]    mx-auto   w-[60rem]`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex gap-[10px] items-center">
          {RecentPostsItems.map((post, index) => (
            <div key={index} className=" w-48">
              <RenderRecommended posts={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
