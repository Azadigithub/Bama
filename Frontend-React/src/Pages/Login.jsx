import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      <div className="flex-center max-w-[300px]">
        {/* <img src="./Images/viewer.webp" alt="" className="w-full h-full" /> */}
        <img src="./Logo/Bama-Login.png" alt="" className="w-full h-full" />
      </div>
      <div className="flex-center">
        <h1 className="font-Vazir">ثبت نام/ ورود به حساب کاربری</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <input
          type="text"
          placeholder="نام کاربری"
          id=""
          className="border-2 border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          id=""
          className="border-2 border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        <a>فراموشی رمز عبور</a>
        <button className=""></button>
      </div>
    </div>
  );
};

export default Login;
