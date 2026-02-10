// Option.js
import React from "react";

const Option = ({ selected, onClick }) => {
  return (
    <div
      className={`w-[20px] h-[20px] border-2 rounded-[5px] ${
        selected ? "bg-gray-500 border-gray-600" : "border-gray-700"
      }`}
      onClick={onClick}
    ></div>
  );
};

export default Option;
