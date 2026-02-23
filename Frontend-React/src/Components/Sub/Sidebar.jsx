import React from "react";

const Sidebar = () => {
  return (
    <div className=" border-amber-700 border-l-4 max-w-[250px]  bg-blue-100 hidden medium:block ">
      <img
        src="./Logo/logo_azmoon.jpg"
        alt=""
        className="rounded-[60px] p-[10px]"
      />
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
      <div className="sticky top-[70px] w-full h-fit flex-center flex-col">
        <div className="">
          <ul className="flex flex-col p-[15px] gap-[5px]">
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
    </div>
  );
};

export default Sidebar;
