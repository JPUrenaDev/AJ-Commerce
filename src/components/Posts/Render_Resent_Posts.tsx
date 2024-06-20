import React from "react";

import { Render_Posts } from "../../interface/Posts/types";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
interface RenderResentPostsProps {
  posts: Render_Posts;
}
export const Render_Resent_Posts: React.FC<RenderResentPostsProps> = ({
  posts,
  relatedPost,
}) => {
  const [changeHeartColorwhenMouseEnter, setChangeColorwhenMouseEnter] =
    useState<boolean>(false);

  const color =
    posts.business_type === "Dealer"
      ? "border-yellow-300 bg-yellow-300"
      : posts.business_type === "Tienda"
      ? "border-blue-300 bg-blue-300"
      : "";

  const whenMouseEnter = () => {
    setChangeColorwhenMouseEnter(true);
  };

  const whenMouseOut = () => {
    setChangeColorwhenMouseEnter(false);
  };
  return (
    <>
      <div className=" h-[330px]">
        <div
          onMouseEnter={whenMouseEnter}
          onMouseLeave={whenMouseOut}
          className={`relative border rounded-lg border-[6px]  ${color} cursor-pointer`}
        >
          <span
            className={`absolute w-[77px] h-[40px]  text-center rounded-br-lg ${color} text-white`}
          >
            <span className="absolute top-1 right-4">
              {posts.business_type}
            </span>
          </span>

          <img className="object-cover h-48 w-96" src={posts.image}></img>
          <div
            className={`${
              changeHeartColorwhenMouseEnter
                ? "bg-white opacity-100"
                : "bg-black opacity-70"
            } w-[45px] h-[45px] right-3 b absolute rounded-lg bottom-3   border-white border`}
          ></div>
          <FaRegHeart
            size={25}
            color={changeHeartColorwhenMouseEnter ? "black" : "white"}
            className="absolute right-[10px]  right-[21px] bottom-5  opacity-100 cursor-pointer"
          />
        </div>

        {/* THE PRESENTATION OF THE ITEMS IS GONNA BE DIFFERENT IF IS THE RELATED POSTED OR THE ITEMS* */}
        {relatedPost ? (
          <>
            <h1 className="font-bold">
              <span>RD$</span>
              {posts.price}
            </h1>{" "}
            <h3>
              {posts.title.length > 10
                ? posts.title.substring(0, 19) + "..."
                : posts.title}
            </h3>{" "}
          </>
        ) : (
          <>
            <h3>
              {posts.title.length > 10
                ? posts.title.substring(0, 40) + "..."
                : posts.title}
            </h3>

            <h1 className="font-bold">
              <span>RD$</span>
              {posts.price}
            </h1>
            <h2 className="">{posts.details}</h2>
          </>
        )}

        {posts.isVerify && (
          <>
            <RiVerifiedBadgeFill size={27} color="gray" />
            <span>Cuenta verificada</span>
          </>
        )}
      </div>
    </>
  );
};
