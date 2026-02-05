import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import loginSchema from "../../Validators/Login";

import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../Validators/Login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const newUser = { username, password };
    const result = loginSchema.safeParse(newUser);
    // console.log(result.error.issues[0].message);
    setTimeout(() => {
      if (result.success) {
        // console.log(username, password);
        fetch("http://127.0.0.1:8000/api/users/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.access) {
              // ذخیره توکن
              localStorage.setItem("access", data.access);
              localStorage.setItem("refresh", data.refresh);
              localStorage.setItem("username", data.username);

              toast.success("ورود با موفقیت انجام شد.", { duration: 3000 });

              setTimeout(() => {
                navigate("/");
              }, 500);
            } else {
              toast.error("نام کاربری یا رمز عبور اشتباه است");
            }
          })

          .catch((err) => {
            console.error(err);
            return toast.error("خطا در ارتباط با سرور");
          });
      } else {
        return toast.error(result.error.issues[0].message, { duration: 3000 });
      }
    }, 1500);
    toast.loading("درحال برسی اطلاعات", { duration: 3000 });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      {/* Bama Logo */}
      <div className="flex-center max-w-[300px]">
        <img src="./Logo/Bama-Login.png" alt="Logo" className="w-full h-full" />
      </div>

      <div className="flex-center">
        <h1 className="font-Vazir"> ورود به حساب کاربری</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-[10px]">
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <div className="flex-center gap-[10px]">
          <p>حساب کاربری ندارید؟</p>
          <Link to={"/Signin"}> ثبت نام </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
