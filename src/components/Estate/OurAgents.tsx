import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RenderOurAgents } from "./RenderOurAgents";
import { useState } from "react";

const agents = [
  {
    id: 1,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCQjMwaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8f2fd9eca4318e19f91c5391bd68aed0f02b45d2/Foto%20Melido.PNG",
  },
  {
    id: 2,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCR2NpaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5dc5cf351e7869edd073c4f06055b490179f9625/062552B8-14D3-45D1-9F29-60D0FA1FB60E.jpeg",
  },
  {
    id: 3,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTDFUaUFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--412f825165a9d492b817faab58b4b09129991b22/shop_2769_profile_image",
  },
  {
    id: 3,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTDFUaUFJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--412f825165a9d492b817faab58b4b09129991b22/shop_2769_profile_image",
  },
  {
    id: 5,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRmsxaXdJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ea36ff17b41a1ecba04bc17d13949b93a59d053e/shop_2835_profile_image",
  },
  {
    id: 6,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzFKdHdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ee81993880f7b9475e691a8273e30ba204783/c8796cc7-8c7a-4d70-a57e-ea3a990d15dc",
  },
  {
    id: 6,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzFKdHdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ee81993880f7b9475e691a8273e30ba204783/c8796cc7-8c7a-4d70-a57e-ea3a990d15dc",
  },
  {
    id: 6,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzFKdHdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ee81993880f7b9475e691a8273e30ba204783/c8796cc7-8c7a-4d70-a57e-ea3a990d15dc",
  },
  {
    id: 6,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzFKdHdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ee81993880f7b9475e691a8273e30ba204783/c8796cc7-8c7a-4d70-a57e-ea3a990d15dc",
  },
  {
    id: 6,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzFKdHdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ee81993880f7b9475e691a8273e30ba204783/c8796cc7-8c7a-4d70-a57e-ea3a990d15dc",
  },
  {
    id: 6,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzFKdHdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ee81993880f7b9475e691a8273e30ba204783/c8796cc7-8c7a-4d70-a57e-ea3a990d15dc",
  },
  {
    id: 6,
    img: "https://www.corotos.com.do/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzFKdHdFPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--008ee81993880f7b9475e691a8273e30ba204783/c8796cc7-8c7a-4d70-a57e-ea3a990d15dc",
  },
];
export const OurAgents = () => {
  const [showScroll, setShowScroll] = useState(false);

  const onMouseEnter = () => {
    setShowScroll(true);
  };

  const onMouseLeave = () => {
    setShowScroll(false);
  };
  return (
    <div className=" mt-[50px]    mx-auto   w-[60rem] ">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-[24px] text-blue-800 mb-[50px]">
          Nuestros Agentes
        </h1>
        <div className="flex items-center gap-2 text-blue-800 font-bold">
          <h2>Ver más</h2>
          <IoIosArrowForward />
        </div>
      </div>

      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`flex items-center gap-3 ${
          showScroll ? "overflow-x-scroll" : "overflow-x-hidden"
        } `}
      >
        {agents.map((agentes) => {
          return <RenderOurAgents agents={agentes} />;
        })}
      </div>
    </div>
  );
};
