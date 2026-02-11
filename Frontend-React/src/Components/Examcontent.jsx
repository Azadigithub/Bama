import React from "react";

const Examcontent = (props) => {
    let { title, description, image } = props
  return (
    <div className="flex-center flex-col  w-[250px] h-[300px] border-blue-600 border-2 p-[10px] rounded-4">
      <h1 className="font-bold">{title}</h1>
      <p className="text-[12px]">{description}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Examcontent;
