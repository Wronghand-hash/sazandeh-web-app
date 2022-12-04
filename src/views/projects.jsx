import Navbar from "../components/navbar";
import ProjectsImage from "../assets/images/projectsImage.webp";
import { AiOutlineLeft } from "react-icons/ai";
import mainPageProjects from "../assets/images/mainPageProjects.webp";
import mainPageProjects2 from "../assets/images/mainPageProjects2.webp";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageProjects7 from "../assets/images/mainPageProjects7.webp";
import { useState } from "react";

export default function projects() {
  const [show, setShow] = useState(false);

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
    <div className="w-full h-full">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${ProjectsImage})`,
          backgroundSize: "100%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justiy-end overflow-hidden items-center w-full h-rem26 bg-black"
      >
        <div className=" w-96 h-96 bg-yellow-400 absolute transform rotate-45 overflow-hidden -translate-x-64 overflow-hidden -translate-y-8"></div>
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">تماس با ما</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">تماس با ما</p>
            <AiOutlineLeft />
            <p className="text-black font-bold">خانه</p>
          </div>
        </div>
      </div>
      <div className="flex py-20 w-full justify-center items-center">
        <div className="flex flex-col h-full w-2/3">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col">
              <div className="flex justify-start">
                <p className="bg-yellow-400 px-2">projects</p>
              </div>
              <p className="text-3xl font-bold">پروژه های ما</p>
            </div>
            <div className="flex">
              <div className="flex space-x-10">
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
            </div>
          </div>
          <div className="flex justify-center py-20">
            <div className="bg-gray-500 justify-center items-center flex flex-wrap w-2/3">
              {projects.map((project) => {
                let showHover = false;
                return (
                  <div
                    key={project}
                    style={{
                      backgroundImage: `url(${project})`,
                      backgroundPosition: "center",
                    }}
                    className="w-56 h-56 bg-red-500"
                    onMouseOver={() => (showHover = true)}
                    onMouseLeave={() => (showHover = false)}
                  >
                    {showHover ? (
                      <div className="flex p-2 space-y-2 flex-col w-full h-full justify-center items-center">
                        <h1 className="font-bold text-xl text-white">
                          قضای اداری
                        </h1>
                        <button className="bg-white text-md font-bold px-4">
                          جزییات پروژه
                        </button>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
