import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function navbar() {
  return (
    <div className="w-full fixed flex-col h-24 bg-black flex z-50">
      <div className="bg-transparent text-white flex justify-end pr-52 p-4 space-x-8">
        <div className="flex space-x-2 justity-between items-center">
          <AiOutlineClockCircle />
          <p>شنبه تا پنج شنبه 12 الی 11</p>
        </div>
        <div className="flex space-x-2 justify-between items-center">
          <AiOutlineMail></AiOutlineMail>
          <p>info@sazandeh.com</p>
        </div>
        <div className="flex space-x-2 justify-between items-center">
          <AiOutlinePhone />
          <p>123-231-2422</p>
        </div>
      </div>
      <div className="flex bg-white items-center justify-around h-16">
        <div className="flex justify-center w-2/3">
          <div className=" w-12 h-12">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="flex w-full   h-16 justify-end pr-48 p-8 space-x-12 items-center align-center">
          <Link
            to={"/aboutus"}
            className="cursor-pointer duration-300 hover:border-2 border-black transition-all p-2"
          >
            درباره ما
          </Link>
          <Link
            to={"/contactus"}
            className="cursor-pointer duration-300 text-md   hover:bg-black hover:text-white  p-4 transition"
          >
            <span className="px-10 flex items-center w-full">تماس باما</span>
          </Link>
          <p className="cursor-pointer duration-300 hover:bg-black hover:text-white p-4 transition ">
            فروشگاه
          </p>
          <p className="cursor-pointer duration-300 hover:bg-black hover:text-white p-4 transition ">
            وبلاگ
          </p>
          <Link
            to={"/services"}
            className="cursor-pointer duration-300 hover:bg-black hover:text-white p-4 transition "
          >
            خدمات
          </Link>
          <Link
            to={"/projects"}
            className="cursor-pointer duration-300 hover:bg-black hover:text-white p-4 transition "
          >
            پروژه ها
          </Link>
          <Link
            to={"/"}
            className="cursor-pointer duration-300 hover:bg-black hover:text-white p-4 transition "
          >
            خانه
          </Link>
        </div>
      </div>
    </div>
  );
}
