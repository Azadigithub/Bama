import { useState } from "react";
import { useRoutes } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import { Toaster } from "react-hot-toast";
import Signin from "./Pages/Signin";
import Exam from "./Pages/Exam";

const routes = [
  { path: "/", element: <Home /> },
  // { path: "/Products", element: <Shop /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signin", element: <Signin /> },
  { path: "/Exam", element: <Exam /> },
  // { path: "/Profile", element: <Profile /> },
  { path: "*", element: <Notfound /> },
  // { path: "/product/:id", element: <Details /> },
];
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <div dir="rtl"></div>
      <Toaster />

      {router}
    </>
  );
}

export default App;
