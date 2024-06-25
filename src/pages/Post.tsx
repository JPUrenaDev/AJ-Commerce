import React from "react";
import { Resent_Posts } from "../components/Posts/Resent_Posts";
import { FeaturedPosts } from "../components/Posts/FeaturedPosts";
import { ImproveYourExperienceInCorotos } from "../components/Login/ImproveYourExperienceInCorotos";
import { PopularCategory } from "../components/Posts/PopularCategory";

export const Post = () => {
  return (
    <>
      <div className="  flex  gap-3 mx-auto  w-[1400px]">
        <ImproveYourExperienceInCorotos />
        <FeaturedPosts />
      </div>
      <PopularCategory />
      <Resent_Posts />
    </>
  );
};
