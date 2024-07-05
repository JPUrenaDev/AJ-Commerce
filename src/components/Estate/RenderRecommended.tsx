import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
export const RenderRecommended = ({ posts }) => {
  return (
    <div className="flex flex-col  px-2 w-[200px] relative cursor-pointer ">
      <img src={posts.img} className="rounded-md  "></img>
      <h3 className="font-bold">{posts.title}</h3>
      <div id="typeAndPrice" className="flex items-center justify-between">
        <label>{posts.type}</label>
        <h2 className="font-bold">
          {"$" + posts.price[0] + "," + posts.price.slice(1)}
        </h2>
        <span className="absolute top-1 left-3 bg-red-500 text-white text-[12px] py-[2px] px-2 rounded-md">
          {posts.businessType}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          {posts.isVerify && <RiVerifiedBadgeFill color="gray" />}
          <h4 className="text-gray-500">{posts.user}</h4>
        </div>
        <hr className=" h-px bg-gray-200 border-0 bg-gray-300 mb-3"></hr>
      </div>
    </div>
  );
};
