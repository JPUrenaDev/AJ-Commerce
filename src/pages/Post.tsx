import { FeaturedPosts } from "../components/Posts/FeaturedPosts";
import { ImproveYourExperienceInCorotos } from "../components/Login/ImproveYourExperienceInCorotos";
import { PopularCategory } from "../components/Posts/PopularCategory";

import { Render_Posts } from "../interface/Posts/types";
import { Posts } from "../components/Posts/Posts";
import { MoreForYou } from "../components/Posts/MoreForYou";
import { ProfessionalsInterest } from "../components/Posts/ProfessionalsInterest";
import { Footer } from "../components/Footer/Footer";

//AQUI LO QUE DEBO HACER ES LLAMAR CON REACT QUERY A CADA UNO DE LOS ENDPOINTS, O SEA LOS FILTROS, SI ES DEALER, VEHICULOS, ETC ETC.
const posts: Render_Posts[] = [
  {
    title:
      "VENDO CHRYSLER SEBRING CONVERTIBLE TOURING, año 2010, 6 cilindros, 2700 Hp/cc",
    image:
      "https://img.corotos.com.do/variants/bj3rrdj5resglgc7zythlor6uzji/a28eec644d1a059687acd7ea4a7cdb3e777daa0421b0e99fbaacfcbb34f6cd9a",
    details: "Usado - Como Nuevo",
    moreDetails: "Usado - Como Nuevo",
    price: 10000,
    business_type: "Agente",
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
    isVerify: true,
  },
];
export const Post = () => {
  return (
    <>
      <div className="  flex  gap-3 mx-auto  w-[1080px]">
        <ImproveYourExperienceInCorotos />
        <FeaturedPosts />
      </div>
      <PopularCategory />
      <Posts postsArray={posts} title="Publicaciones recientes" />
      <Posts postsArray={posts} title="Inmuebles" />
      <Posts postsArray={posts} title="Vehiculos" />
      <Posts postsArray={posts} title="Empleos" />
      <MoreForYou />
      <ProfessionalsInterest />
      <Footer />
    </>
  );
};
