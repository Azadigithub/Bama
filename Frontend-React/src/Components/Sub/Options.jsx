// Options.js
import React, { useState } from "react";
import Option from "./Option";

const Options = ({ number, started }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="flex items-center justify-end w-full h-[20px] gap-2">
      <div className="flex gap-[5px]">
        {[0, 1, 2, 3].map((i) => (
          <Option
            key={i}
            selected={selectedIndex === i}
            onClick={() => {
              if (!started) {
                alert("تاشروع آزمون گزینه ها غیر فعال هستند.");
                return
              }
              setSelectedIndex(i);
            }}
          />
        ))}
      </div>
      <p dir="ltr" className="text-[17px] p-[5px]">
        {number}.
      </p>
    </div>
  );
};

export default Options;
