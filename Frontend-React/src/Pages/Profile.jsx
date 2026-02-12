import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";

const Profile = () => {
  return (
    <div className="font-Vazir w-[90%] h-[90vh] bg-blue-200 mx-auto my-[20px] rounded-8">
      <div className="w-full h-full">
        <div className="w-[300px] h-[100%] bg-blue-400 rounded-8 p-[10px]">
          <div className=" p-[20px] flex items-center justify-evenly">
            <img
              src="./Profiles/avatar_man_1.jpg"
              alt=""
              className="w-[140px] rounded-[100px]"
            />
            <div className="flex flex-col gap-[15px]">
              <RiUploadCloud2Fill />
              <FaEdit />
              <IoSettings />
              <SlLogout />
            </div>
          </div>
          <div className="flex flex-col w-full gap-[10px] ">
            <p className=" rounded-8 py-[10px] px-[20px]">
              نام و نام خانوادگی : رضا مهدوی نیا
            </p>
            <hr />
            <p className="py-[10px] px-[20px]">جنسیت : آقا </p>
            <hr />
            <p className="py-[10px] px-[20px]">محل سکونت : تهران</p>
            <hr />
            <p className=" rounded-8 py-[10px] px-[20px]"> متولد 1385/05/12</p>
            <hr />
            <p className="py-[10px] px-[20px]">استان : تهران</p>
            <hr />
            <p className="py-[10px] px-[20px]"> شماره همراه :09125864796 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
