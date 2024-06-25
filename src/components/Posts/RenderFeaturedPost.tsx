import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface RenderResentPostsProps {
  posts: {
    photo: string;

    business_type: string;
    price: string;
  };
}
export const RenderFeaturedPost: React.FC<RenderResentPostsProps> = ({
  posts,
}) => {
  const [changeHeartColorwhenMouseEnter, setChangeColorwhenMouseEnter] =
    useState<boolean>(false);

  const whenMouseEnter = () => {
    setChangeColorwhenMouseEnter(true);
  };

  const whenMouseOut = () => {
    setChangeColorwhenMouseEnter(false);
  };
  return (
    <>
      <div className=" ">
        <div
          onMouseEnter={whenMouseEnter}
          onMouseLeave={whenMouseOut}
          className={`relative  rounded-lg cursor-pointer`}
        >
          <img
            className="object-cover h-[130px] w-[140px] rounded-lg"
            src={posts.image}
          ></img>
          <div
            className={`${
              changeHeartColorwhenMouseEnter
                ? "bg-white opacity-100"
                : "bg-black opacity-70"
            } w-[35px] h-[30px] right-[4px] absolute rounded-lg bottom-3   border-white border`}
          ></div>
          <FaRegHeart
            size={20}
            color={changeHeartColorwhenMouseEnter ? "black" : "white"}
            className="absolute  right-[11px] bottom-4  opacity-100 cursor-pointer"
          />
        </div>

        {/* THE PRESENTATION OF THE ITEMS IS GONNA BE DIFFERENT IF IS THE RELATED POSTED OR THE ITEMS* */}

        <>
          <h1 className="font-bold">
            <span>RD$</span>
            {posts.price}
          </h1>
        </>
      </div>
    </>
  );
};
