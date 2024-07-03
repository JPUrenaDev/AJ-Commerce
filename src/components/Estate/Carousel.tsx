import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
export const CarouselComponent = () => {
  return (
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
      itemClass="carousel-item-padding-40-px"
      className="  w-[1080px]   justify-between mx-auto"
    >
      <img
        className="rounded-md mx-4 bg-blue-800 w-[90%]"
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800 w-[90%]"
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRWp5aXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--414ea7a7c06b8a7ea2794192826d390e33136cb7/4.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800 "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800  "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800  "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800  "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800  "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800  "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800  "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
      <img
        className="rounded-md mx-4 bg-blue-800  "
        src="https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS1FTakFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f793e93bd3e1971eb9bfe2250dc1f43773122756/Corotos_1.gif"
        alt=""
      />
    </Carousel>
  );
};
