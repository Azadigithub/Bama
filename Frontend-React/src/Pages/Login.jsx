import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  // State برای فرم و خطا
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // فانکشن ارسال فرم
  const handleLogin = async () => {
    setError(""); // پاک کردن خطا قبل از ارسال
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/users/login/", {
        username,
        password,
      });
      
      // ذخیره توکن‌ها در localStorage
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      alert(`ورود موفق! خوش آمدید ${res.data.username}`);
      
      // اینجا می‌توان به صفحه دیگر ریدایرکت کرد
      // مثلا: navigate("/dashboard")
      
    } catch (err) {
      if (err.response) {
        // نمایش پیام خطا از بک‌اند
        const detail = err.response.data.detail || Object.values(err.response.data)[0];
        setError(detail);
      } else {
        setError("مشکل در اتصال به سرور");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      <div className="flex-center max-w-[300px]">
        <img src="./Logo/Bama-Login.png" alt="Logo" className="w-full h-full" />
      </div>

      <div className="flex-center">
        <h1 className="font-Vazir">ثبت نام/ ورود به حساب کاربری</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-[10px]">
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        {error && <p className="text-red-500">{error}</p>}

        <a href="#">فراموشی رمز عبور</a>

        <button
          onClick={handleLogin}
          className="bg-tint-1 px-5 py-2 rounded-[10px] text-white"
        >
          ورود
        </button>
      </div>
    </div>
  );
};

export default Login;
