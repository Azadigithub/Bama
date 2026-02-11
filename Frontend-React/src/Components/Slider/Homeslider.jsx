import React from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Homeslider = ({ name, children, DataImages = [] }) => {
  return (
    <div className="">
      <Swiper 
        pagination={true}
        modules={[Pagination,Autoplay ]}
        // modules={[Pagination]}
        // Autoplay
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        className="mySwiper medium:h-[85px] h-[125px] "
      >
        {DataImages.map((items) => (
          <SwiperSlide key={items.id}>
            {/* <img src={items.url} alt={items.alt} className="w-full h-full object-cover" /> */}
            <p className="text-black text-[24px] text-center p-[15px]">{items.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {children}
    </div>
  );
};

export default Homeslider;
