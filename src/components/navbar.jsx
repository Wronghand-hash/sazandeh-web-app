import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="w-full fixed flex-col h-24 bg-transparent flex">
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
          <div className=" w-12 h-12 bg-gray-500"></div>
        </div>
        <div className="flex w-full   h-16 justify-end pr-48 p-8 space-x-12 items-center align-center">
          <Link className="cursor-pointer hover:border-2 border-black transition-all p-2">
            درباره ما
          </Link>
          <Link
            to={"/contactus"}
            className="cursor-pointer hover:border-2 border-black transition-all"
          >
            تماس باما
          </Link>
          <p className="cursor-pointer hover:border-2 border-black transition-all p-1">
            فروشگاه
          </p>
          <p className="cursor-pointer hover:border-2 border-black transition-all p-1">
            وبلاگ
          </p>
          <Link
            to={"/services"}
            className="cursor-pointer hover:border-2 border-black transition-all p-1"
          >
            خدمات
          </Link>
          <p className="cursor-pointer hover:border-2 border-black transition-all p-1">
            پروژه ها
          </p>
          <Link
            to={"/"}
            className="cursor-pointer hover:border-2 border-black transition-all p-1"
          >
            خانه
          </Link>
        </div>
      </div>
    </div>
  );
}
