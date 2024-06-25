import React from "react";

import { FaAngleRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { RenderFeaturedPost } from "./RenderFeaturedPost";

interface RenderFeaturedPost {
  image: string;
  price: number;
  business_type: string;
}

const posts: RenderFeaturedPost[] = [
  {
    image:
      "https://www.corotos.com.do/imagenes/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTDVhaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--17168402b3e8c7d6ba3be41e71b65d8ffad40fba/hondacrvexl2019_0_jpeg?variant_options%5Bformat%5D=webp&variant_options%5Bresize_to_fit%5D%5B%5D=1280&variant_options%5Bresize_to_fit%5D%5B%5D=720",

    price: 10000,
    business_type: "Tienda",
  },
  {
    image:
      "https://www.corotos.com.do/imagenes/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTHVjaUFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c927f4f65dc9f09a592b5769e0114c3160355c71/cdae3d94_bcb7_46a3_9f7a_734a07342e30_jpg?variant_options%5Bformat%5D=webp&variant_options%5Bresize_to_fit%5D%5B%5D=1280&variant_options%5Bresize_to_fit%5D%5B%5D=720",

    price: 11333,
    business_type: "Dealer",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg",

    price: 11333,
    business_type: "Dealer",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg",

    price: 11333,
    business_type: "Dealer",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0_Hyundai_Sonata_%28DN8%29_fl_1.jpg/375px-0_Hyundai_Sonata_%28DN8%29_fl_1.jpg",

    price: 11333,
    business_type: "Dealer",
  },
];

export const FeaturedPosts = () => {
  return (
    <div className="bg-white    rounded-lg px-[60px] py-4 ">
      <div className="  flex   justify-between">
        <h2 className="font-semibold text-[20px]">Publicaciones Destacadas</h2>
        <div className="flex items-center gap-3  cursor-pointer">
          <Link to={"/"} className="text-[18px] mb-5 text-blue-400">
            {" "}
            Explorar más
          </Link>
          <FaAngleRight size={20} className="mb-5 text-blue-400" />
        </div>
      </div>

      <div className="flex  items-center gap-5  mt-4 ">
        {posts.map((values, index) => {
          return <RenderFeaturedPost key={index} posts={values} />;
        })}
      </div>
    </div>
  );
};
