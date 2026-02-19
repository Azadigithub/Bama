import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { ResualtExam } from "../../Data/Data.js";
const Muichart = () => {
  const [data, setData] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      const allPercents = ResualtExam.map((item) => item.percent);
      console.log(allPercents);
      setData(allPercents);
    };
    fetchData();
  }, []);
  return (
    <div className="">
      <div>
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: [1, 2, 3, 4, 5, 6],
              // data: [
              //   "زبان انگلیسی",
              //   "ریاضیات ",
              //   "نظریه زبان ها و سیگنال",
              //   "ساختمان داده ،الگوریتم ، هوش مصتوعی",
              //   "منطقی ، معماری ، سیستم های الکترونیک",
              //   "سیستم عامل ، شبکه ، پایگاه داده",
              // ],
              scaleType: "band",
              height: 100,
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: 100,
            },
          ]}
          series={[
            {
              data: data,
            },
          ]}
          height={500}
          width={600}
        />
      </div>
    </div>
  );
};

export default Muichart;
