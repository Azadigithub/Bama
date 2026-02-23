import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { LiaArtstation } from "react-icons/lia";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
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
  );
};

export default Categories;
