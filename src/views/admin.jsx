import { AiOutlineLeft } from "react-icons/ai";
import { Article, Storefront, ArrowElbowUpRight } from "phosphor-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import BlogManagement from "../components/blogManagement.jsx";
import ShopManagement from "../components/shopManagement.jsx";

export default function admin() {
  const [tab, setTab] = useState("shop");

  return (
    <div className="w-screen overflow-hidden h-full">
      <Navbar className="" />

      <div className="flex h-32 h-full w-screen "></div>

      <div className="flex justify-end lg:px-8 px-4 w-full h-24 bg-gray-900">
        <div className="flex justify-center items-center space-x-4 text-white text-right">
          <div className="w-20 rounded-full h-20 bg-blue-500"></div>
          <div className="flex items-end justify-center flex-col">
            <h1>کورماتن</h1>
            <h2>ادمین سایت</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-full bg-gray-200">
        {tab !== "" ? (
          <div className="flex transition  px-4 items-center justify-between w-full border-black h-14 border-b-2">
            <h2>{tab}</h2>
            <ArrowElbowUpRight
              onClick={() => {
                setTab("");
              }}
              size={32}
            />
          </div>
        ) : null}
        {tab === "" ? (
          <div className="flex items-center justify-center  w-full h-full">
            <div className="flex w-full flex-col items-center  lg:space-y-0 lg:justify-around">
              <div
                onClick={() => {
                  setTab("blog");
                }}
                className="flex justify-center hover:bg-yellow-400 transition bg-gray-300 flex-col items-center w-full h-52"
              >
                <h1 className="font-bold text-xl"> مدیریت وبلاگ </h1>
                <div>
                  <Article size={50} />
                </div>
              </div>
              <div
                onClick={() => {
                  setTab("shop");
                }}
                className="flex justify-center hover:bg-yellow-400 transition bg-gray-200 flex-col items-center w-full h-52"
              >
                <h1 className="font-bold text-xl">مدیریت فروشگاه</h1>
                <div>
                  <Storefront size={50} />
                </div>
              </div>
            </div>
          </div>
        ) : tab === "shop" ? (
          <ShopManagement />
        ) : tab === "blog" ? (
          <BlogManagement />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
