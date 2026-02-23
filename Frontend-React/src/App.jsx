import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notfound from "./Pages/Notfound";
import Signin from "./Pages/Signin";
import Exam from "./Pages/Exam";
import Profile from "./Pages/Profile";
import ResualtTable from "./Pages/ResualtTable";
import Modal from "./Components/Modal";
import Muichart from "./Components/Sub/Muichart";
import Review from "./Pages/Review/Review";
import Firststate from "./Pages/Review/Firststate";


const routes = [
  { path: "/", element: <Home /> },
  // { path: "/Products", element: <Shop /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signin", element: <Signin /> },
  { path: "/Exam", element: <Exam /> },
  { path: "/Exam/:id", element: <Exam /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Resualt", element: <ResualtTable /> },
  { path: "/modal", element: <Modal /> },
  { path: "/chart", element: <Muichart /> },
  { path: "/Review", element: <Review /> },
  { path: "/FirstState", element: <Firststate /> },
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
