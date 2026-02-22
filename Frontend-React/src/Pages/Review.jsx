import React from "react";
import Reviewlist from "../Components/Sub/Reviewlist";
const Review = () => {
  return (
    <div className="font-Vazir flex items-center flex-col w-full h-[100vh]  bg-linear-to-bl from-purple-600 to-white p-[20px] gap-[10px]">
      <h1 className="text-white text-center font-bold">
        باما درس خوندن خیلی راحته !
      </h1>
      <p className="text-center">
        باما یک وب اپلیکشن کاملا رایگان با سطح دسترسی بالا برای هر رشته و آموزشی
        طراحی شده.
      </p>
      <ul className="flex flex-col ">
        <h4 className="text-[18px] font-bold m-[10px]">
          برای رسیدن به موفقیت لازمه:
        </h4>

        <Reviewlist text="برنامه ریزی دقیق داشته باشی" />
        <Reviewlist text="برنامه مرور روزانه و منظم داشته باشی" />
        <Reviewlist text="آزمون بدی و نتیجه رو تحلیل کنی" />
        <Reviewlist text="نقات ضعفت رو پیدا کنی" />
        <Reviewlist text="مهارت هاتو افزایش بدی" />
      </ul>
      <h5>همین الان باما شروع کن!</h5>
      <button className=" bg-purple-800 text-white px-[20px] py-[10px] rounded-8">
        بزن بریم
      </button>
    </div>
  );
};

export default Review;
