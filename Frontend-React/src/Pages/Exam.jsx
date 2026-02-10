import React, { useEffect, useState } from "react";
import Options from "../Components/Sub/Options";

const Questions = [
  { id: 1, title: "" },
  { id: 2, title: "" },
  { id: 3, title: "" },
  { id: 4, title: "" },
  { id: 5, title: "" },
  { id: 6, title: "" },
  { id: 7, title: "" },
  { id: 8, title: "" },
  { id: 9, title: "" },
  { id: 10, title: "" },
  { id: 11, title: "" },
  { id: 12, title: "" },
  { id: 13, title: "" },
  { id: 14, title: "" },
  { id: 15, title: "" },
  { id: 16, title: "" },
  { id: 17, title: "" },
  { id: 18, title: "" },
  { id: 19, title: "" },
  { id: 20, title: "" },
  { id: 21, title: "" },
  { id: 22, title: "" },
  { id: 23, title: "" },
  { id: 24, title: "" },
  { id: 25, title: "" },
  // { id: 26, title: "" },
  // { id: 27, title: "" },
  // { id: 28, title: "" },
  // { id: 29, title: "" },
  // { id: 30, title: "" },
  // { id: 31, title: "" },
  // { id: 32, title: "" },
  // { id: 33, title: "" },
  // { id: 34, title: "" },
  // { id: 35, title: "" },
  // { id: 36, title: "" },
  // { id: 37, title: "" },
  // { id: 38, title: "" },
  // { id: 39, title: "" },
  // { id: 40, title: "" },
];

const Exam = () => {
  const STORAGE_KEY = "exam-timer";
  const Allowedtimes = 1;
  const TotalMinutes = 250;
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TotalMinutes * 60);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.started && saved.startAt) {
      const elapsed = Math.floor((Date.now() - saved.startAt) / 1000);
      const remaining = TotalMinutes * 60 - elapsed;
      setStarted(true);
      setTimeLeft(remaining > 0 ? remaining : 0);
    }
  }, []);

  const StartExam = () => {
    const now = Date.now();
    setStartTime(now);

    setStarted(true);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ started: true, startAt: now }),
    );
  };
  const EndExam = () => {
    setEndTime(Date.now());
    // const end = Date.now();
    // console.log(end);
    setStarted(false);
    localStorage.removeItem(STORAGE_KEY);
    console.log("Start:", new Date(startTime).toLocaleString());
    console.log("End:", new Date(endTime).toLocaleString());
  };

  useEffect(() => {
    if (!started) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert(" زمان آزمون به پایان رسید!");
          localStorage.removeItem(STORAGE_KEY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started]);

  const isDanger = timeLeft <= 10 * 60;
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // --------------------------------------------------------------------------------------------
  return (
    <div className="flex w-full h-full flex-col items-center justify-center p-[20px] gap-[10px] ">
      {/* Header of exam */}
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-[100%] border-gray-700 border-2 rounded-[10px] p-[15px] ">
        <div className=" flex flex-col items-center justify-center gap-[20px]">
          <p>تعداد سوالات : 115 سوال</p>
          {/* <p>استفاده از ماشین حساب مجاز نیست.</p> */}
        </div>
        <div className="flex flex-col p-[20px] ">
          <h1 className="text-center text-[30px] font-bold">
            آزمون ورودی دوره های کارشناسی ارشد - سال 1405
          </h1>
          <h2 className="text-center text-[20px] font-bold">
            مهندسی کامپیوتر (کد1277)
          </h2>
        </div>
        <div className=" flex-center flex-col gap-[20px]">
          {!started && (
            <p id="timeanswer">مدت زمان پاسخگویی : {TotalMinutes} دقیقه</p>
          )}

          <div className="flex-center flex-col gap-[5px]">
            {started && (
              <p
                className={`font-bold ${isDanger ? "text-red-500" : "text-gray-500"}`}
              >
                زمان باقی‌مانده: {hours}:{minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-evenly flex-col sm:flex-row w-[100%] border-gray-700 border-2 rounded-[10px] p-[15px] gap-[10px] ">
        <div className=" flex-center">
          <p>استفاده از ماشین حساب مجاز نیست.</p>
        </div>
        <div className="w-[60px]">
          <img src="./Images/sanjesh.jpg" alt="" className="w-full h-full" />
        </div>
        <div className=" flex flex-col">
          <p> آزمون نمره منفی دارد.</p>
        </div>
      </div>

      {/* -------------Main content */}
      <div className="grid w-full h-full small:grid-cols-[67%_30%]  medium:grid-cols-[75%_23%] xlarge:grid-cols-[77%_21%] large:grid-cols-[20%_63%_15%] gap-[10px]">
        {/* Right navbar */}
        <div className="hidden large:block w-[100%] h-[100vh] border-gray-700 border-2 rounded-[5px] "></div>

        {/* center navbar */}
        <div className="w-[100%] h-[100vh] border-gray-700 border-2 rounded-[5px] ">
          {/* Main source of pdf exam */}
          {started && (
            <div className="w-[100%] h-[100%] border-gray-700 border-2 rounded-[5px]">
              <object
                data="/Pdf/Computer1404.pdf"
                // #toolbar=0&navpanes=0&scrollbar=0&zoom=110
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                  <p className="mb-2 text-gray-700">
                    مرورگر شما PDF را پشتیبانی نمی‌کند .
                  </p>
                </div>
              </object>
            </div>
          )}
          {!started && (
            <div className="flex-center w-full h-full ">
              <button
                onClick={() => {
                  StartExam();
                }}
                className=" border-2 border-black rounded-8 p-[20px]"
              >
                شروع آزمون
              </button>
            </div>
          )}
          {started && (
            <div className="flex-center w-full h-[100px]">
              <button
                onClick={() => {
                  EndExam();
                }}
                className=" border-2 border-black rounded-8 p-[20px]"
              >
                پایان آزمون
              </button>
            </div>
          )}
        </div>
        {/* Left navbar */}
        <div
          dir="rtl"
          className=" w-[100%] h-full grid grid-cols-[auto_auto] items-center justify-evenly small:flex small:flex-col small:justify-center border-gray-700 border-2 rounded-[5px] gap-[10px] p-[10px]"
        >
          {Questions.map((item) => {
            return <Options key={item.id} number={item.id} started={started} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exam;
