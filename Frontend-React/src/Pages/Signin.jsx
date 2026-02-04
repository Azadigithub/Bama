import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { signinschema } from "../../Validators/Login";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSignin = () => {
    const newuser = { username, password, repeatpassword, email };
    const result = signinschema.safeParse(newuser);
    toast.loading("درحال برسی اطلاعات", { duration: 2000 });
    setTimeout(() => {
      if (result.success) {
        //   console.log(username, password, repeatpassword, email);
        return toast.success("ثبت نام شما با موفقیت انجام شد.", 2000);
      }
      //   console.log(result);
      //   console.log(result.error.issues[0].message);
      return toast.error(result.error.issues[0].message);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      {/* Bama Logo */}
      <div className="flex-center max-w-[300px]">
        <img src="./Logo/Bama-Login.png" alt="Logo" className="w-full h-full" />
      </div>

      <div className="flex-center">
        <h1 className="font-Vazir"> ثبت نام حساب کاربری</h1>
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
        <input
          type="password"
          placeholder="تکرار رمز عبور"
          value={repeatpassword}
          onChange={(e) => setRepeatpassword(e.target.value)}
          className="border-2 border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        <input
          type="text"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-tint-1 px-[15px] py-[5px] rounded-[10px]"
        />
        {/* {error && <p className="text-red-500">{error}</p>} */}

        <a href="#">فراموشی رمز عبور</a>

        <button
          onClick={handleSignin}
          className="bg-black px-10 py-8 rounded-[10px] text-white text-center"
        >
          ثبت نام
        </button>
        <div className="flex-center gap-[10px]">
          <p>حساب کاربری دارید؟</p>
          <Link to={"/Login"}> ورود</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
