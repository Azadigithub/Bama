import React from "react";

const Firststate = () => {
  return (
    <div className="font-Vazir flex items-center flex-col w-full h-[100vh]  bg-linear-to-bl from-purple-600 to-white p-[20px] gap-[10px]">
      <h1 className="text-white text-center font-bold">بخش اول</h1>
      <h3 className=" text-center font-bold m-[10px] text-[18px]">
        چند سوال کوتاه هست که برای شروع لازمه جواب بدی
      </h3>
      <div className="w-full">
        <h4 className="text-center p-[10px]"> جنسیت</h4>
        <div className="flex-center w-full gap-[15px]">
          <div className="flex-center">
            <label for="cars">آقا </label>
            <input type="radio" name="#jender" id="1" />
          </div>
          <div className="flex-center">
            <label for="cars"> خانم</label>
            <input type="radio" name="#jender" id="1" />
          </div>
        </div>
      </div>
      <label for="cars"> وضعیت تحصیل</label>
      <select className="w-[220px] bg-white border-0 outline-0 rounded-4 px-[10px]">
        <option value="volvo"> </option>
        <option value="volvo">دانش آموز</option>
        <option value="saab">راهنمایی</option>
        <option value="fiat">دبیرستان</option>
        <option value="audi">دانشجو</option>
        <option value="audi"> درحال آمادگی برای کنکور</option>
      </select>
      <label for="cars">در چه مقطع تحصیلی هستی؟</label>
      <select className="w-[220px] bg-white border-0 outline-0 rounded-4 px-[10px]">
        <option value="volvo"> </option>
        <option value="volvo">ابتدایی</option>
        <option value="saab">راهنمایی</option>
        <option value="fiat">دبیرستان</option>
        <option value="audi">دانشجوی ارشد</option>
        <option value="audi">دانشجوی دکتری</option>
        <option value="audi">دانشجوی لیسانس</option>
        <option value="audi">دانش آموز کنکور سراسری</option>
        <option value="audi">دانشجوی کنکور ارشد</option>
        <option value="audi">دانشجوی کنکور دکتری</option>
      </select>

      <div className="fixed bottom-[20px] flex-center gap-[20px] ">
        <button className=" bg-purple-800 text-white px-[20px] py-[10px] rounded-8">
          مرحله بعد
        </button>
        <button className=" bg-purple-800 text-white px-[20px] py-[10px] rounded-8">
          مرحله قبل
        </button>
      </div>
    </div>
  );
};

export default Firststate;
