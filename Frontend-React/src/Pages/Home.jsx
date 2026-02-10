import React from "react";
import Homeslider from "../Components/Slider/Homeslider";
const ArrayImages = [
  { url: "./Slider-images/azmoon-1.jpeg" },
  { url: "./Slider-images/exam-and time.jpeg" },
  { url: "./Slider-images/exam-stress.jpeg" },
  { url: "./Slider-images/Work-schedule.jpg" },
  { url: "./Slider-images/exam-4.webp" },
  { url: "./Slider-images/exam-7.webp" },
];

const Home = () => {
  return (
    <div className="w-full h-[100vh] grid  grid-cols-[100%] medium:grid-cols-[20%_60%_20%]">
      <div className="bg-red-400 hidden medium:block"> </div>
      <div className="bg-amber-700 ">
        <Homeslider DataImages={ArrayImages} name />
      </div>
      <div className="bg-green-700 hidden medium:block"></div>
      {/* <h1 className='text-center text-[30px] font-Vazir'>آزمونیوم</h1> */}
    </div>
  );
};

export default Home;
