import React from "react";
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Examslider = ({ DataImages }) => {
  return (
    <div className="w-[1020px] mx-auto  padding-[20px]">
      <Swiper
        pagination={true}
        modules={[Autoplay]}
        // modules={[Pagination]}
        // Autoplay
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper "
      >
        {DataImages.map((items) => (
          // console.log(items.title)
          <SwiperSlide key={items.id}>
            <Link to={`/Exam/${items.id}`}>
              <div className="flex flex-col items-center justify-evenly w-[240px] h-[340px] border-blue-600 border-2 p-[10px] rounded-4">
                <h1 className="font-bold">{items.title}</h1>
                <p className="text-[12px]">{items.description}</p>
                <img src={items.image} alt="" className="w-[90%]" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Examslider;
