import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const Searchbar = () => {
  return (
    <div className="w-full small:w-[50%] large:w-[30%] min-h-[50px] flex items-center justify-between gap-[10px] border-gray-800 border-2 rounded-8 pr-[10px]">
      <IoSearchSharp className="min-w-[30px] min-h-[30px]" />
      <input
        type="text"
        placeholder="جست و جو"
        className=" w-full h-full border-0 outline-0"
      />
    </div>
  );
};

export default Searchbar;
