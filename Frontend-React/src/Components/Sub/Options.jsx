import React from "react";
import Option from "./Option";

const Options = (prop) => {
  return (
    <div className="flex-center w-full h-[20px] justify-end">
      <div className="flex-center gap-[5px]">
        <Option />
        <Option />
        <Option />
        <Option />
      </div>
      <p dir="ltr" className=" text-[17px] p-[5px]">
        {prop.number}.
      </p>
    </div>
  );
};

export default Options;
