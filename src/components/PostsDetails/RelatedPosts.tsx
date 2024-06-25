import React from "react";
import { Render_Posts } from "../../interface/Posts/types";
import { RenderPosts } from "../Posts/RenderPosts";

const posts: Render_Posts[] = [
  {
    title:
      "VENDO CHRYSLER SEBRING CONVERTIBLE TOURING, año 2010, 6 cilindros, 2700 Hp/cc",
    image:
      "https://img.corotos.com.do/variants/bj3rrdj5resglgc7zythlor6uzji/a28eec644d1a059687acd7ea4a7cdb3e777daa0421b0e99fbaacfcbb34f6cd9a",
    details: "Usado - Como Nuevo",
    moreDetails: "Usado - Como Nuevo",
    price: 10000,
    business_type: "Tienda",
    isVerify: true,
  },
  {
    title: "Test",
    image:
      "https://www.bienesraicesnicanor.com/Images/Dovinet-444a5516-ccb7-4b7c-a24c-f57342259263.jpg",
    details: "test",
    moreDetails: "test",
    price: 11333,
    business_type: "Dealer",
    isVerify: true,
  },
  {
    title: "Test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg",
    details: "test",
    moreDetails: "test",
    price: 11333,
    business_type: "Dealer",
    isVerify: true,
  },
];
export const RelatedPosts = () => {
  return (
    <div className=" w-[700px]">
      <h2 className="text-[20px] mt-6 font-bold mb-8 ">
        También te puede interesar
      </h2>
      <div className="flex gap-[40px] pb-4  w-auto h-full  items-center">
        {posts.map((relatePosts) => (
          <RenderPosts posts={relatePosts}></RenderPosts>
        ))}
      </div>
    </div>
  );
};
