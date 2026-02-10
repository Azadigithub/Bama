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
        modules={[Pagination, ]}
        // modules={[Pagination]}
        // Autoplay
        // loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}

        className="mySwiper h-[356px] "
      >
        {DataImages.map((items) => (
          <SwiperSlide key={items.id}>
            <img src={items.url} alt={items.alt} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {children}
    </div>
  );
};

export default Homeslider;
