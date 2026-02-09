import React from "react";
import Options from "../Components/Sub/Options";
const Questions = [
  { id: 1, title: "" },
  { id: 2, title: "" },
  { id: 3, title: "" },
  { id: 4, title: "" },
  { id: 5, title: "" },
  { id: 6, title: "" },
  { id: 7, title: "" },
  { id: 8, title: "" },
  { id: 9, title: "" },
  { id: 10, title: "" },
  { id: 11, title: "" },
  { id: 12, title: "" },
  { id: 13, title: "" },
  { id: 14, title: "" },
  { id: 15, title: "" },
  { id: 16, title: "" },
  { id: 17, title: "" },
  { id: 18, title: "" },
  { id: 19, title: "" },
  { id: 20, title: "" },
];

const Exam = () => {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center p-[20px] gap-[10px] ">
      {/* Header of exam */}
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-[100%] border-gray-700 border-2 rounded-[10px] p-[15px] ">
        <div className=" flex flex-col items-center justify-center gap-[20px]">
          <p>تعداد سوالات : 115 سوال</p>
          {/* <p>استفاده از ماشین حساب مجاز نیست.</p> */}
        </div>
        <div className="flex flex-col p-[20px] ">
          <h1 className="text-center text-[30px] font-bold">
            آزمون ورودی دوره های کارشناسی ارشد - سال 1405
          </h1>
          <h2 className="text-center text-[20px] font-bold">
            مهندسی کامپیوتر (کد1277)
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[20px]">
          <p>مدت زمان پاسخگویی : 250 دقیقه</p>
          {/* <p> آزمون نمره منفی دارد.</p> */}
        </div>
      </div>
      <div className=" flex-center flex-col sm:flex-row w-[100%] border-gray-700 border-2 rounded-[10px] p-[15px] gap-[10px] ">
        <div className=" flex-center">
          <p>استفاده از ماشین حساب مجاز نیست.</p>
        </div>
        <div className="w-[60px]">
            <img src="./Images/sanjesh.jpg" alt="" className="w-full h-full" />
        </div>
        <div className=" flex-center">
          <p> آزمون نمره منفی دارد.</p>
        </div>
      </div>
      {/* -------------Main content */}
      <div className="grid w-full h-full small:grid-cols-[67%_30%]  medium:grid-cols-[75%_23%] xlarge:grid-cols-[77%_21%] large:grid-cols-[20%_63%_15%] gap-[10px]">
        {/* Right navbar */}
        <div className="hidden large:block w-[100%] h-[100vh] border-gray-700 border-2 rounded-[5px] "></div>
        {/* center navbar */}
        <div className="w-[100%] h-[100vh] border-gray-700 border-2 rounded-[5px] "></div>
        {/* Left navbar */}
        <div className=" w-[100%] h-full grid grid-cols-[auto_auto] items-center justify-evenly small:flex small:flex-col small:justify-center border-gray-700 border-2 rounded-[5px] gap-[10px] p-[10px]">
          {Questions.map((item) => {
            return <Options number={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exam;
