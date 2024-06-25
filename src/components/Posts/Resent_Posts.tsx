import React from "react";
import { Render_Posts } from "../../interface/Posts/types";
import { Render_Resent_Posts } from "./Render_Resent_Posts";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    isVerify: false,
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
  {
    title: "Test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg",
    details: "test",
    moreDetails: "test",
    price: 11333,
    business_type: "Dealer",
    isVerify: false,
  },
  {
    title: "Test",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg",
    details: "test",
    moreDetails: "test",
    price: 11333,
    business_type: "Dealer",
    isVerify: false,
  },
];

export const Resent_Posts = () => {
  return (
    <div className="bg-white mt-4 w-[1400px] rounded-lg px-4 py-4 mx-auto ">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[20px] mb-5">Publicaciones recientes</h1>
        <div className="flex items-center gap-3 ">
          <Link to={"/"} className="text-[20px] mb-5 text-blue-400">
            {" "}
            Explorar más
          </Link>
          <FaAngleRight size={30} className="mb-5 text-blue-400" />
        </div>
      </div>

      <div className="flex gap-[40px] pb-4 h-full  items-center">
        {posts.map((values, index) => {
          return <Render_Resent_Posts key={index} posts={values} />;
        })}
      </div>
    </div>
  );
};
