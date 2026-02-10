import React from "react";
import Homeslider from "../Components/Slider/Homeslider";
const ArrayImages = [
  { url: "./Slider-images/azmoon-1.jpeg" },
  { url: "./Slider-images/exam-and time.jpeg" },
  { url: "./Slider-images/exam-55.jpeg" },
  { url: "./Slider-images/Work-schedule.jpg" },
  { url: "./Slider-images/exam-4.webp" },
  { url: "./Slider-images/exam-77.jpg" },
];

const Home = () => {
  return (
    <div className="font-Vazir w-full h-[100vh] grid  grid-cols-[100%] medium:grid-cols-[20%_80%]">
      <div className="  bg-gray-100 hidden medium:block">
        <img src="./Logo/logo_azmoon.jpg" alt="" />
        <div className="flex-center">
          <img
            src="./Logo/Logo_azmoon2.png"
            alt=""
            className="w-[40px] rounded-[40px]"
          />
          <h1 className="text-center text-[30px] font-Vazir">آزمونیوم</h1>
        </div>
        <p className="text-center">رایگان آزمون بده!!</p>
        <hr />
        <div className="">
          <ul className="flex flex-col p-[15px]">
            <li> حساب کاربری</li>
            <li>مشاهده آزمون ها</li>
            <li>آزمون های من</li>
            <li>آزمون های نشان شده</li>
            <li>تقویم</li>
            <li>سفارشات</li>
            <li>علاقه مندی ها </li>
            <li>جلسات انلاین</li>
            <li>مشاوره تحصیلی</li>
            <li>پرسش و پاسخ </li>
            <li> سوالات متداول</li>
            <li>درباره ما</li>
            <li> ارتباط با پشتیبانی</li>
            <li>خروج از حساب </li>
          </ul>
        </div>
        <div className="flex-center gap-[20px] flex-wrap ">
          <img
            src="./Logo/Social networks/twitter-logo.png"
            alt=""
            className="w-[30px]"
          />
          <img
            src="./Logo/Social networks/bale-logo-.png"
            alt=""
            className="w-[30px]"
          />
          <img
            src="./Logo/Social networks/instagram-logo.png"
            alt=""
            className="w-[30px]"
          />
          <img
            src="./Logo/Social networks/telegram-logo.webp"
            alt=""
            className="w-[30px]"
          />
        </div>
      </div>
      <div className="bg-amber-700 ">
        {/* <Homeslider DataImages={ArrayImages} name /> */}
      </div>
      {/* <div className="bg-green-700 hidden medium:block"></div> */}
    </div>
  );
};

export default Home;
