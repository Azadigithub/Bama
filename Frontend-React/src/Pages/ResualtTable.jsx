import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { ResualtExam } from "../Data/Data";
import Muichart from "../Components/Sub/Muichart";

export default function ResualtTable() {
  return (
    <div className="flex-center font-Vazir flex-col mt-[30px] mb-[100px]">
      <div className="flex-center">
        <div className=" p-[20px] flex items-center justify-evenly">
          <img
            src="./Profiles/avatar_man_1.jpg"
            alt="profile"
            className="w-[140px] rounded-[100px]"
          />
        </div>
        <div className="">
          <h1 className="text-[24px] font-bold">آزمون آزمایشی شماره2</h1>
          <h3> علی مهدوی نیا</h3>
          <p> کد ملی: 127455325</p>
          <p> تاریخ برگزاری:1400/02/14</p>
          <p> سطح آزمون: جامع متوسط</p>
          <h3 className="font-bold"> درصد کل آزمون : %44.24 </h3>
        </div>
      </div>

      <TableContainer
        component={Paper}
        className="font-Vazir"
        sx={{ maxWidth: 1250, margin: "20px auto" }}
      >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>دروس آزمون</TableCell>
              <TableCell align="right">درصد</TableCell>
              <TableCell align="right">تعداد سوالات</TableCell>
              <TableCell align="right"> صحیح</TableCell>
              <TableCell align="right"> غلط</TableCell>
              <TableCell align="right"> نزده</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ResualtExam.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.lesson}
                </TableCell>
                <TableCell align="right">{row.percent}%</TableCell>
                <TableCell align="right">{row.qusetions}</TableCell>
                <TableCell align="right">{row.correct}</TableCell>
                <TableCell align="right">{row.wrong}</TableCell>
                <TableCell align="right">{row.empty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex-center">
        <Muichart />
        <div className="flex flex-col gap-[10px]">
          <p>1-زبان انگلیسی</p>
          <p>2-ریاضیات </p>
          <p>3-نظریه زبان ها و سیگنال</p>
          <p>4-ساختمان داده ،الگوریتم ، هوش مصتوعی</p>
          <p>5-منطقی ، معماری ، سیستم های الکترونیک</p>
          <p>6-سیستم عامل ، شبکه ، پایگاه داده</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly w-full">
        <Link to={"/"}>بازگشت </Link>
        <button> برسی مجدد آزمون</button>
        <button>شرکت در نظر سنجی</button>
      </div>
    </div>
  );
}
