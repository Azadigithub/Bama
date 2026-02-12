import React from "react";

const Examcontent = (props) => {
    let { title, description, image } = props
  return (
    <div className="flex flex-col items-center justify-evenly w-[180px] large:w-[220px] h-[300px] border-blue-600 border-2 p-[10px] rounded-4">
      <h1 className="font-bold">{title}</h1>
      <p className="text-[12px]">{description}</p>
      <img src={image} alt="" className="w-[90%]"/>
    </div>
  );
};

export default Examcontent;
