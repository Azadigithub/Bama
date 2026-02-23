import React from "react";
import Homeslider from "./Homeslider";

const Textslider = ({ArrayImages}) => {
  return (
    <div className="w-[full] h-[85px] bg-amber-400 mx-auto mb-[30px]">
      <Homeslider DataImages={ArrayImages} name />
    </div>
  );
};

export default Textslider;
