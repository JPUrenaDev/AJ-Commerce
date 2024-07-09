import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowForward } from "react-icons/io";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const customStyleImages = {
  display: "block",
  height: "90%",
  width: "89%",
  margin: "0px",
  borderRadius: "23px",
};
export const CarouselComponent = () => {
  return (
    <div className=" mt-[50px]    mx-auto   w-[70rem] ">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-[24px] text-blue-800">Categorias</h1>
        <div className="flex items-center gap-2 text-blue-800 font-bold">
          <h2>Ver más</h2>
          <IoIosArrowForward />
        </div>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass=""
        className=" w-[70rem]    h-[500px]"
      >
        <img
          className="  "
          src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSDVBaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3628cee40eaac0a9fc717f3b2c68b9f25e49dbeb/3.png"
          style={customStyleImages}
        />
        <img
          className="rounded-md mx-4 bg-blue-800 "
          src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRWp5aXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--414ea7a7c06b8a7ea2794192826d390e33136cb7/4.gif"
          alt=""
          style={customStyleImages}
        />
        <img
          className="rounded-md mx-4 bg-blue-800 "
          src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
          alt=""
          style={customStyleImages}
        />
        <img
          className="rounded-md mx-4 bg-blue-800 "
          src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
          alt=""
          style={customStyleImages}
        />
        <img
          className="rounded-md mx-4 bg-blue-800 "
          src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
          alt=""
          style={customStyleImages}
        />
      </Carousel>
    </div>
  );
};
