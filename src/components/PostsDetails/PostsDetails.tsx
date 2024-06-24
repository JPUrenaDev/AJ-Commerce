import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ChangePagePostsDetails } from "./ChangePagePostsDetails";
import { SaveInFavorite } from "./ui/SaveInFavorite";
import { DoOffer } from "./ui/DoOffer";
import { FaLocationDot } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import { SellerCard } from "./SellerCard";
import { RiErrorWarningFill } from "react-icons/ri";
import { useState } from "react";
import { RelatedPosts } from "./RelatedPosts";
import { SellerCardVerifedCustomer } from "./SellerCardVerifedCustomer";
export const PostsDetails = () => {
  const [photosDetailPosts, setPhotosDetailPosts] = useState([
    {
      img: "https://www.corotos.com.do/imagenes/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCUFRSaGdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c5a5d867cc35f61a30d89e6855152f68ea9956f0/9e2ef873_0c2c_42e6_a2f0_55398776c154_jpg?variant_options%5Bformat%5D=webp&variant_options%5Bresize_to_fit%5D%5B%5D=1280&variant_options%5Bresize_to_fit%5D%5B%5D=720",
      isVerified: true,
    },
    {
      img: "https://www.corotos.com.do/imagenes/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCUFRSaGdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c5a5d867cc35f61a30d89e6855152f68ea9956f0/9e2ef873_0c2c_42e6_a2f0_55398776c154_jpg?variant_options%5Bformat%5D=webp&variant_options%5Bresize_to_fit%5D%5B%5D=1280&variant_options%5Bresize_to_fit%5D%5B%5D=720",
      isVerified: true,
    },
    {
      img: "https://www.corotos.com.do/imagenes/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCUExSaGdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--899aa1bd92789a9d98b9d42cb8978310ef694589/aeb6d040_f977_4e2e_a512_e20644a8d6d1_jpg?variant_options%5Bformat%5D=webp&variant_options%5Bresize_to_fit%5D%5B%5D=1280&variant_options%5Bresize_to_fit%5D%5B%5D=720",
      isVerified: false,
    },
    {
      img: "https://www.corotos.com.do/imagenes/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCUFBSaGdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6b08eb7df4388b8d00fce1de058c044cd6afb051/351b0a1b_e994_43f1_9746_89b59bee0223_jpg?variant_options%5Bformat%5D=webp&variant_options%5Bresize_to_fit%5D%5B%5D=1280&variant_options%5Bresize_to_fit%5D%5B%5D=720",
      isVerified: true,
    },
  ]);

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const onNextPhoto = () => {
    if (currentPhoto == photosDetailPosts.length - 1) {
      setCurrentPhoto(0);
      return;
    }
    setCurrentPhoto((previousValue) => previousValue + 1);
  };

  const onPreviousPhoto = () => {
    //IF THE CURRENT PHOTO = 0, I WANT TO SHOW THE LAST PHOTO
    if (currentPhoto == 0) {
      setCurrentPhoto(photosDetailPosts.length - 1);
      return;
    }
    setCurrentPhoto((previousValue) => previousValue - 1);
  };
  return (
    <div className="flex items-start  w-[1300px]  mx-auto gap-[30px] pb-[30px]">
      <div className="flex items-center  px-[60px] ">
        <div className="rounded-r-lg bg-black w-[35px]  py-[20px] mr-4 ml-4 mb-[770px] opacity-75 ml-1 cursor-pointer">
          <IoIosArrowBack
            size={30}
            color="white"
            className=""
            onClick={onPreviousPhoto}
          />
        </div>

        <div>
          <div className="flex flex-col">
            <img
              className="object-cover w-[500px]  mx-auto h-[400px] px-9 cursor-zoom-in"
              src={`${photosDetailPosts[currentPhoto].img}`}
            ></img>
            <div className="flex gap-3">
              {/** RENDER MINI PHOTOS  */}
              {photosDetailPosts.map((photos, index) => (
                <>
                  <img
                    className={`object-cover w-[60px] ${
                      index == currentPhoto ? "opacity-100" : "opacity-50"
                    } top-[140px] h-[50px] mb-4 mt-[10px] cursor-zoom-in`}
                    src={photos.img}
                  ></img>
                </>
              ))}
            </div>
          </div>
          <div className="flex mt-5 items-center gap-[280px] text-gray-500">
            <h2>Condicion</h2>
            <div className="flex items-center gap-2">
              <h2>Usado</h2>
              <RiErrorWarningFill
                color="gray"
                size={20}
                className="cursor-pointer"
              />
            </div>
          </div>
          <hr className="border-salate-500 w-full mt-5"></hr>
          <div className="flex mt-5 items-center gap-[230px] text-gray-500">
            <h2>Entrega a domicilio</h2>
            <h2>No</h2>
          </div>
          <hr className="border-salate-500 w-full mt-5 mb-6"></hr>
          <div>
            <h2 className="font-semibold text-[20px] mb-4">Descripción</h2>
            <p>
              Traje Militar - verde olivo - chaqueta pantalón y falda . Buen
              estado solos dos veces usado Con accesorios Excelentes condiciones
              Para talla mujer mediana petite
            </p>
          </div>
          <div>
            <RelatedPosts />
          </div>
        </div>

        <div className="rounded-l-lg  bg-black w-[35px] mb-[770px] py-[20px] mb-[300px] mr-4 ml-4 opacity-75 pl-1 cursor-pointer">
          <IoIosArrowForward size={30} color="white" onClick={onNextPhoto} />
        </div>
      </div>

      <div>
        <hr className="border-salate-500"></hr>
        <ChangePagePostsDetails />
        <hr className="border-salate-500"></hr>
        <div>
          <h1 className="font-bold mt-5 text-[27px]">Uniforme Militar ERD</h1>
          <h2 className="font-bold  text-[27px] mb-5">RD$ 675</h2>
          <label className="text-slate-500 ">
            Publicado: 17 de abril de 2024
          </label>
          <SaveInFavorite />
          <DoOffer />
          <div className="mt-5 ">
            <hr className="border-salate-500"></hr>

            <h2 className="py-6  text-[20px]">Inventario disponible</h2>
            <h2>
              Cantidad:<span className="font-bold"> 1 unidad</span>
              <hr className="border-salate-500 mt-5"></hr>
            </h2>
            <div className="mt-4 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <FaLocationDot color="gray" size={25} />
                <h2>Distrito Nacional, Santo Domingo</h2>
              </div>

              <div className="flex items-center gap-3">
                <FaTag color="gray" size={25} />
                <h2>Libros y revistas</h2>
              </div>
              {photosDetailPosts[0].isVerified ? (
                <SellerCardVerifedCustomer />
              ) : (
                <SellerCard />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
