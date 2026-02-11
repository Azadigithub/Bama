import React from "react";
import Homeslider from "../Components/Slider/Homeslider";
const ArrayImages = [
  {
    url: "./Slider-images/azmoon-1.jpeg",
    title: "رایگان آزمون بده و نتیجه آزمون رو برسی کن!",
  },
  {
    url: "./Slider-images/exam-and time.jpeg",
    title: "مهارت های آزمون دادن رو ارتقا بده",
  },
  {
    url: "./Slider-images/exam-55.jpeg",
    title: " مدیریت زمان در آزمون رو کنترل کن",
  },
  {
    url: "./Slider-images/Work-schedule.jpg",
    title: " با برنامه ریزی و تمرین قطعا میتونی به هدفت برسی!",
  },
  {
    url: "./Slider-images/exam-4.webp",
    title: "آزمون های آزمایشی ، تست خود سنجی و افزایش مهارت   ",
  },
  { url: "./Slider-images/exam-77.jpg", title: "مطمعن شو که قبول میشی!" },
];

const Home = () => {
  return (
    <div className="font-Vazir w-full h-[100vh] grid  grid-cols-[100%] medium:grid-cols-[20%_80%]">
      {/* Sidebar  */}
      <div className="border-amber-700 border-l-4  bg-blue-100 hidden medium:block ">
        <img src="./Logo/logo_azmoon.jpg" alt="" className="rounded-[60px]" />
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
      {/* Main content  */}
      <div className="">
        <div className="w-[98%] h-[85px] bg-amber-400 mx-auto">
          <Homeslider DataImages={ArrayImages} name />
        </div>
      </div>
      {/* <div className="bg-amber-100 "> */}
      {/* <Homeslider DataImages={ArrayImages} name /> */}
      {/* </div> */}
      {/* <div className="bg-green-700 hidden medium:block"></div> */}
    </div>
  );
};

export default Home;
