import React from 'react'
import Searchbar from "../../Components/Sub/Searchbar.jsx";
import Sidebar from "../../Components/Sub/Sidebar.jsx";
import Textslider from "../../Components/Slider/Textslider.jsx";
import Categories from "../../Components/Sub/Categories.jsx";
import { ArrayImages } from "../../Data/Data.js";
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


      </div>
    </div>
  )
}

export default GlobalExam
