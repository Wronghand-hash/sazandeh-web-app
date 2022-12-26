import { AiOutlineLeft } from "react-icons/ai";
import { Article, Storefront } from "phosphor-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function admin() {
  return (
    <div className="w-full h-full">
      <Navbar className="" />

      <div className="flex h-32 h-full w-full "></div>

      <div className="flex border-y-8 border-black justify-end px-4 w-full h-24 bg-gray-900">
        <div className="flex justify-center items-center space-x-4 text-white text-right">
            <div className="w-20 rounded-full h-20 bg-blue-500"></div>
          <div className="flex items-end justify-center flex-col">
            <h1>کورماتن</h1>
            <h2>ادمین سایت</h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  w-full h-full">
        <div className="flex w-full flex-col items-center space-y-3 lg:space-y-0 lg:justify-around">
          <div className="flex justify-center hover:bg-yellow-400 transition bg-gray-300 flex-col items-center w-full h-52">
            <h1 className="font-bold text-xl"> مدیریت وبلاگ </h1>
            <div>
              <Article size={50} />
            </div>
          </div>
          <div className="flex justify-center hover:bg-yellow-400 transition bg-gray-200 flex-col items-center w-full h-52">
            <h1 className="font-bold text-xl">مدیریت فروشگاه</h1>
            <div>
              <Storefront size={50} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
