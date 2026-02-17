import React from "react";
import Examcontent from "../Components/Examcontent";
// rect-Libraries
import { BiSolidCategory } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { LiaArtstation } from "react-icons/lia";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ArrayImages } from "../Data/Data.js";
// components
import Homeslider from "../Components/Slider/Homeslider";
import Category from "../Components/Sub/Category.jsx";
import Examslider from "../Components/Slider/Examslider.jsx";
//data
import { Examinslider } from "../Data/Data.js";
import { Menucategories } from "../Data/Data.js";

const Home = () => {
  return (
    <div className="font-Vazir w-full h-[100vh] grid  grid-cols-[100%] medium:grid-cols-[20%_80%]">
      {/* Sidebar  */}
      <div className="border-amber-700 border-l-4  bg-blue-100 hidden medium:block ">
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
        {/* header slider  */}
        <div className="w-[full] h-[85px] bg-amber-400 mx-auto mb-[30px]">
          <Homeslider DataImages={ArrayImages} name />
        </div>
        {/* Categories  */}
        <div className="flex flex-col flex-wrap justify-evenly w-[full] text-white bg-gray-600 p-[20px] gap-[20px]">
          <div className="w-full small:w-[50%] large:w-[30%] min-h-[50px] flex items-center justify-between gap-[10px] border-gray-800 border-2 rounded-8 pr-[10px]">
            <IoSearchSharp className="min-w-[30px] min-h-[30px]" />
            <input
              type="text"
              placeholder="جست و جو"
              className=" w-full h-full border-0 outline-0"
            />
          </div>
          <div className="flex-center  flex-wrap justify-evenly w-[full] p-[10px] gap-[20px]">
            <div className="flex-center gap-[30px] flex-wrap">
              <div className="flex-center">
                <BiSolidCategory />
                <h3>دسته بندی آزمون ها</h3>
              </div>
              <div className="flex-center">
                <LiaArtstation />
                <h3> شگفت انگیز</h3>
              </div>
              <div className="flex-center">
                <FaRegQuestionCircle />
                <h3>سوالی دارید؟</h3>
              </div>
            </div>
            <div className="flex-center gap-[20px] ">
              <Link
                to={"/Login"}
                className="flex-center  bg-white p-[10px] text-gray-600 rounded-4 cursor-pointer"
              >
                <IoLogInOutline />
                <p>ورود</p>
              </Link>
              <Link
                to={"/Signin"}
                className="flex-center border-white border-2 p-[10px] rounded-4 cursor-pointer"
              >
                <IoLogInOutline />
                <p>ثبت نام</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Menu  */}
        <div className="flex-center flex-wrap w-full p-[30px] gap-[20px]">
          {Menucategories.map((cat) => (
            // console.log(cat)
            <Category key={cat.id} {...cat} />
          ))}
        </div>
        {/* ExamInfows */}
        <div className="w-full flex flex-col gap-[30px] bg-gray-200 p-[30px]">
          <h2 className="text-center text-[32px] font-bold">
            آزمون های ویژه ارشد
          </h2>
          <Examslider DataImages={Examinslider} />
        </div>
        <div className="w-full flex flex-col gap-[30px] bg-gray-200 p-[30px]">
          <h2 className="text-center text-[32px] font-bold">کنکور سراسری</h2>
          <Examslider DataImages={Examinslider} />
        </div>
      </div>
    </div>
  );
};

export default Home;
