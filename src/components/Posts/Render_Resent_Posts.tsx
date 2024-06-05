import React from "react";

import { Render_Posts } from "../../interface/Posts/types";
import { FaRegHeart } from "react-icons/fa";

interface RenderResentPostsProps {
  posts: Render_Posts;
}
export const Render_Resent_Posts: React.FC<RenderResentPostsProps> = ({
  posts,
}) => {
  return (
    <>
      <div>
        <div className="relative border rounded-lg border-[6px] border-yellow-300">
          {posts.business_type === "Dealer" && (
            <span className="absolute w-[70px] h-[40px] text-center bg-yellow-300 text-white">
              {posts.business_type}
            </span>
          )}
          <img
            className="object-cover rounded-lg h-48 w-96"
            src={posts.image}
          ></img>
          <div className="bg-black w-[45px] h-[45px] right-3 b absolute rounded-lg bottom-3 opacity-70 border-white border"></div>
          <FaRegHeart
            size={25}
            color="white"
            className="absolute right-[10px]  right-[21px] bottom-5  opacity-100 cursor-pointer"
          />
        </div>

        <h3>
          {posts.title.length > 10
            ? posts.title.substring(0, 40) + "..."
            : posts.title}
        </h3>

        <h1 className="font-bold">
          <span>RD$</span>
          {posts.price}
        </h1>
        <h2>{posts.details}</h2>
      </div>
    </>
  );
};
