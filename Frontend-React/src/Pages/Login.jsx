import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameerror, setUsernameerror] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setTimeout(()=>{

      toast.error("وارد کردن فیلد های زیر الزامی است.", { duration: 3000  });
    },2000)
    toast.loading("درحال برسی اطلاعات", { duration: 2000 });
  };
  // const handleLogin = async () => {
  //   setError(""); // پاک کردن خطا قبل از ارسال
  //   try {
  //     const res = await axios.post("http://127.0.0.1:8000/api/users/login/", {
  //       username,
  //       password,
  //     });

  //     // ذخیره توکن‌ها در localStorage
  //     localStorage.setItem("access_token", res.data.access);
  //     localStorage.setItem("refresh_token", res.data.refresh);

  //     alert(`ورود موفق! خوش آمدید ${res.data.username}`);

  //     // اینجا می‌توان به صفحه دیگر ریدایرکت کرد
  //     // مثلا: navigate("/dashboard")

  //   } catch (err) {
  //     if (err.response) {
  //       // نمایش پیام خطا از بک‌اند
  //       const detail = err.response.data.detail || Object.values(err.response.data)[0];
  //       setError(detail);
  //     } else {
  //       setError("مشکل در اتصال به سرور");
  //     }
  //   }
  // };
  const UsernameHandler = () => {};
  const PasswordHandler = (e) => {
    // if(e.target.value.lenght)
    let value = e.target.value;
    setUsername(value);
    console.log(value.length);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
    {/* Bama Logo */}
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
          onChange={(e) => PasswordHandler(e)}
          className="border-2  border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        {/* {error && <p className="text-red-500">{error}</p>} */}

        <a href="#">فراموشی رمز عبور</a>

        <button
          onClick={handleLogin}
          className="bg-black px-10 py-8 rounded-[10px] text-white text-center"
        >
          ورود
        </button>
      </div>
    </div>
  );
};

export default Login;
