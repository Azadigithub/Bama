import React from "react";
import Searchbar from "../../Components/Sub/Searchbar.jsx";
import Sidebar from "../../Components/Sub/Sidebar.jsx";
import Textslider from "../../Components/Slider/Textslider.jsx";
import Categories from "../../Components/Sub/Categories.jsx";
import { ArrayImages } from "../../Data/Data.js";
import { GlobalExamData } from "../../Data/Data.js";

const GlobalExam = () => {
  return (
    <div className="font-Vazir w-full h-[100vh] grid  grid-cols-[100%] medium:grid-cols-[15%_85%]">
      <Sidebar />
      {/* Main content  */}
      <div className="">
        <Textslider ArrayImages={ArrayImages} />
        <div className="flex flex-col flex-wrap justify-evenly w-[full] text-white bg-gray-600 p-[20px] gap-[20px]">
          <Searchbar />
          <Categories />
        </div>
        <div className="">
          <h1 className="text-center text-[24px] font-bold m-[20px]">
            آزمون های جامع کنکور سراسری
          </h1>
          <ul className="max-w-[400px] w-[90%] mx-auto my-[20px] flex-center flex-col gap-[10px] border-4 rounded-16">
            {GlobalExamData.map((item) => {
              console.log(item.exam);

              return (
                <li
                  key={item.id}
                  className=" text-center border-b-4 w-[100%] p-[10px]"
                >
                  {item.exam}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalExam;
