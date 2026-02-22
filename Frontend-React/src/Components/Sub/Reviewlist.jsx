import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
const Reviewlist = ({text}) => {
  return (
    <li className="flex items-center justify-start">
      <MdArrowBackIosNew />
      <p>{text}</p>
    </li>
  );
};

export default Reviewlist;
