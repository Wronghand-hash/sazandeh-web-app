import Navbar from "../components/navbar";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import mainPageProjects from "../assets/images/mainPageProjects.webp";
import mainPageProjects2 from "../assets/images/mainPageProjects2.webp";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageProjects7 from "../assets/images/mainPageProjects7.webp";
import Footer from '../components/footer'

import catalogImage from "../assets/images/catalogImage.jpg";
export default function catalogs() {
  const [catalogs, setCatalogs] = useState([
    mainPageProjects,
    mainPageProjects2,
    mainPageProjects3,
    mainPageProjects4,
    mainPageProjects5,
    mainPageProjects6,
    mainPageProjects7,
  ]);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${catalogImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-row-reverse justiy-end overflow-hidden items-center w-full h-rem26 bg-black"
      >
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">کاتالوگ ها</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">کاتالوگ ها</p>
            <AiOutlineLeft />
            <Link to={"/"}>
              <a
                href="www.sazandeh.onredner.com"
                className="text-white font-bold"
              >
                خانه
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  w-full h-full ">
        <div className="flex w-full h-full justify-around items-center flex-wrap p-5  space-y-28">
          {catalogs.map((catalog) => {
            return (
              <div className="bg-gray-200 my-4 border justify-center items-around  rounded flex flex-col w-96 h-76 ">
                <div className="w-full flex justify-center items-center h-full">
                  <img
                    className="object-contain w-80 h-80"
                    src={catalog}
                    alt=""
                  />
                </div>
                <div className="w-full h-full flex flex items-center justify-between px-4 py-4 ">
                  <button className=" bg-yellow-400  font-bold rounded shadow-2xl w-10 h-10"></button>
                  <h1 className="text-2xl font-bold">عنوان کاتالوگ</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
