import React from "react";

const Category = ({title}) => {
  return (
    <div className="flex-center w-[120px] h-[120px] border-2 border-gray-700 hover:bg-gray-300">
      <h2 className="text-center font-bold">{title}</h2>
    </div>
  );
};

export default Category;
