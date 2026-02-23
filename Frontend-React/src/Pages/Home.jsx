import React from "react";
import Examcontent from "../Components/Examcontent";
// rect-Libraries

import { ArrayImages } from "../Data/Data.js";
// components
import Homeslider from "../Components/Slider/Homeslider";
import Category from "../Components/Sub/Category.jsx";
import Examslider from "../Components/Slider/Examslider.jsx";
//data
import { Examinslider } from "../Data/Data.js";
import { Menucategories } from "../Data/Data.js";
import Sidebar from "../Components/Sub/Sidebar.jsx";
import Textslider from "../Components/Slider/Textslider.jsx";
import Searchbar from "../Components/Sub/Searchbar.jsx";
import Categories from "../Components/Sub/Categories.jsx";
import ExamContainer from "../Components/Sub/ExamContainer.jsx";

const Home = () => {
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
        {/* Menu  */}
        <div className="flex-center flex-wrap w-full p-[30px] gap-[20px]">
          {Menucategories.map((cat) => (
            // console.log(cat)
            <Category key={cat.id} {...cat} />
          ))}
        </div>
        {/* ExamInfows */}
        <ExamContainer
          Examinslider={Examinslider}
          title="آزمون های ویژه ارشد"
        />
        <ExamContainer Examinslider={Examinslider} title="کنکور سراسری" />
      </div>
    </div>
  );
};

export default Home;
