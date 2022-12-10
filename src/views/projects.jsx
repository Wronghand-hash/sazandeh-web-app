import Navbar from "../components/navbar";
import ProjectsImage from "../assets/images/projectsImage.webp";
import { AiOutlineLeft } from "react-icons/ai";
import { CaretDown } from "phosphor-react";
import mainPageProjects from "../assets/images/mainPageProjects.webp";
import mainPageProjects2 from "../assets/images/mainPageProjects2.webp";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageProjects7 from "../assets/images/mainPageProjects7.webp";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import Footer from "../components/footer";

export default function projects() {
  const [show, setShow] = useState(false);

  const [showIndex, setShowIndex] = useState(null);

  const [projects, setProjects] = useState([
    mainPageProjects,
    mainPageProjects2,
    mainPageProjects3,
    mainPageProjects4,
    mainPageProjects5,
    mainPageProjects6,
    mainPageProjects7,
  ]);
  return (
    <div className="w-full overflow-hidden h-full">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${ProjectsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justiy-start overflow-hidden items-center w-full h-rem26 bg-black"
      >
        <div className="hidden lg:absolute w-96 h-96 bg-yellow-400 absolute transform rotate-45 overflow-hidden -translate-x-64 overflow-hidden -translate-y-8"></div>
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white  font-bold text-5xl">پروژه</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">پروژه</p>
            <AiOutlineLeft />
            <p className="text-white font-bold">خانه</p>
          </div>
        </div>
      </div>
      <div className="flex py-20 w-full justify-center items-center">
        <div className="flex flex-col h-full w-full lg:w-2/3">
          <div className="flex px-2 w-full justify-between items-center">
            <div className="flex flex-col">
              <div className="flex justify-start">
                <p className="bg-yellow-400 captlize px-2">projects</p>
              </div>
              <p className="text-3xl font-bold">پروژه های ما</p>
            </div>
            <div className="flex hidden lg:flex flex-wrap lg:space-x-10">
              <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                همه
              </p>
              <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                دکوراسیون
              </p>
              <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                نقشه و طرح
              </p>
              <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                بازسازی
              </p>
              <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                اداری
              </p>
            </div>

            <Menu>
              <Menu.Items className="absolute lg:hidden p-5 right-0 translate-y-32 bg-yellow-400 rounded-2xl space-y-4">
                <Menu.Item>
                  {({ active }) => (
                    <div className={`${active && "bg-blue-500"}`}>
                      <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                        همه
                      </p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className={`${active && "bg-blue-500"}`}>
                      <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                        دکوراسیون
                      </p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className={`${active && "bg-blue-500"}`}>
                      <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                        نقشه و طرح
                      </p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className={`${active && "bg-blue-500"}`}>
                      <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                        بازسازی
                      </p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  <p className="hover:bg-yellow-400 px-2 transition-all cursor-pointer">
                    اداری
                  </p>
                </Menu.Item>
              </Menu.Items>
              <Menu.Button className="flex lg:hidden">
                <CaretDown size={32} />
                <p className="font-bold text-xl">نشونم بده</p>
              </Menu.Button>
            </Menu>
          </div>
          <div className="flex flex-col items-center   justify-center py-20">
            <div className=" justify-center lg:space-y-4 space-x-4 items-center flex flex-wrap w-full">
              {projects.map((project, i) => {
                let [hover, setHover] = useState(false);
                return (
                  <div
                    key={i}
                    style={{
                      backgroundImage: `url(${project})`,
                      backgroundPosition: "center",
                    }}
                    className="w-72 transition-all h-72 bg-red-500"
                    onMouseEnter={() => setShowIndex(i)}
                    onMouseLeave={() => setShowIndex(null)}
                  >
                    <div
                      style={{
                        visibility: showIndex === i ? "visible" : "hidden",
                      }}
                      className="w-72 absolute h-72 bg-black bg-opacity-25"
                    ></div>
                    <div
                      style={{
                        transition: "0.4",
                        transition: "ease",
                        visibility: showIndex === i ? "visible" : "hidden",
                      }}
                      className="flex transition-all p-2 space-y-2 flex-col w-full h-full justify-center items-center"
                    >
                      <h1 className="font-bold text-xl text-white">
                        قضای اداری
                      </h1>
                      <button className="bg-white text-md font-bold px-4">
                        جزییات پروژه
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center mt-20">
              <button className="px-8 border-b-4 border-yellow-400 py-2 font-bold bg-black text-white  hover:border-b-6 transition-all border-yellow-00">
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
