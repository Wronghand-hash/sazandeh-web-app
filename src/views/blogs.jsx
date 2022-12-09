import Navbar from "../components/navbar";
import { AiOutlineLeft } from "react-icons/ai";
import blogsImage from "../assets/images/blogsImage.jpg";
import mainPageProjects from "../assets/images/mainPageProjects.webp";
import mainPageProjects2 from "../assets/images/mainPageProjects2.webp";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageProjects7 from "../assets/images/mainPageProjects7.webp";
import { useState } from "react";
import { Heart, ChatsCircle, User } from "phosphor-react";
import Footer from '../components/footer'

export default function blogs() {
  const [blogs, setBlogs] = useState([
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
      <Navbar></Navbar>
      <div
        style={{
          backgroundImage: `url(${blogsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justiy-end overflow-hidden items-center w-full h-rem26 bg-black"
      >
        <div className="hidden lg:block w-96 h-96 bg-yellow-400 absolute transform rotate-45 overflow-hidden -translate-x-64 overflow-hidden -translate-y-8"></div>
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">وبلاگ سازنده</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500 font-bold">تماس با ما</p>
            <AiOutlineLeft />
            <p className="text-white font-bold">خانه</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full h-32 items-center">
        <h1 className="font-bold text-5xl">آخرین بروز رسانی ها</h1>
      </div>

      <div className="w-full h-full px-4 lg:px-20 flex-wrap space-y-3 lg:space-x-3 flex justify-center items-center">
        {blogs.map((blog, i) => {
          return (
            <div className="flex border cursor-pointer hover:bg-gray-100 flex-col bg-white w-full h-full lg:w-1/3 lg:h-1/3">
              <div className="w-full h-full">
                <img
                  className="object-contain w-full h-full"
                  src={blog}
                  alt=""
                />
              </div>
              <div className="w-full space-y-2 px-8 py-4 h-full flex flex-col">
                <div className="flex text-right flex-col">
                  <p className="bg-blue-500 py-1 w-14 flex justify-center text-sm text-white">
                    8 april
                  </p>
                  <p className="text-2xl font-bold">عنوان وبلاگ</p>
                </div>
                <div className="flex text-right justify-center items-center">
                  <p className="flex text-xs">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </p>
                </div>
                <div className="flex w-full space-x-4">
                  <div className="flex space-x-2 text-sm justify-around items-center">
                    <p>
                      <User size={18} />
                    </p>
                    <p>by admin</p>
                  </div>
                  <div className="flex space-x-2 text-sm justify-around items-center">
                    <p>
                      <Heart size={18} />
                    </p>
                    <p>24</p>
                  </div>
                  <div className="flex space-x-2 text-sm justify-around items-center">
                    <p>
                      <ChatsCircle size={18} />
                    </p>
                    <p>12</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full h-24 justify-center items-center">
        <button className="px-6 py-2 font-bold bg-black text-white  hover:border-b-6 transition-all border-yellow-500">
          بیشتر
        </button>
      </div>
      <Footer />
    </div>
  );
}
