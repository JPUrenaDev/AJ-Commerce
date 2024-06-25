import React from "react";
import { RenderPosts } from "./RenderPosts";
import { Render_Posts } from "../../interface/Posts/types";

type postsArrayElements = {
  title: string;
  image: string;
  details: string;
  moreDetails: string;
  price: number;
  business_type: string;
  isVerify: boolean;
};

type postsProps = {
  postsArray: postsArrayElements[];
  title: string;
};

export const Posts = ({ postsArray, title }: postsProps) => {
  return (
    <div className="bg-white rounded-lg w-[1080px] mx-auto mt-4 px-4">
      <h2 className="font-bold text-[20px] mb-3 pt-3">{title}</h2>

      <div className="flex gap-[20px] pb-[0px] h-full   items-center">
        {postsArray.map((post) => (
          <RenderPosts posts={post} />
        ))}
      </div>
    </div>
  );
};
