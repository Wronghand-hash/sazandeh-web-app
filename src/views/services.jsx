import Navbar from "../components/navbar";
import { AiOutlineLeft } from "react-icons/ai";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import { PhoneIncoming } from "phosphor-react";
import { useState } from "react";
import {
  ArrowCircleRight,
  House,
  BookOpen,
  Lightbulb,
  PictureInPicture,
} from "phosphor-react";
import manWithSmile from "../assets/images/manWithSmile.webp";

export default function services() {
  const [services, setServices] = useState([
    mainPageProjects3,
    mainPageProjects4,
    mainPageProjects5,
    mainPageProjects6,
  ]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row-reverse justiy-end overflow-hidden items-center w-full h-rem26 bg-black">
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">خدمات ما</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">خدمات ما</p>
            <AiOutlineLeft />
            <p className="text-black font-bold">خانه</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center py-20 justify-center ">
        <div className="flex divide-x py-4 w-8/12 ">
          {services.map((service) => {
            return (
              <div className="w-76 flex-col flex hover:bg-blue-500 hover:text-white transition-all bg-gray-300 h-64">
                <div>
                  <img src={service} alt="" />
                </div>
                <div className="flex w-full h-full px-2 justify-around items-center align-center">
                  <div className="flex justify-center px-4 w-full h-full items-start flex-col">
                    <p>طراحی و معماری</p>
                    <p>ساختمان</p>
                  </div>
                  <div>
                    <ArrowCircleRight size={32} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 w-full h-full">
        <div className="flex justify-center space-x-8 -translate-y-10">
          <button className="flex shadow-xl transition w-64 justify-around bg-white border h-20 hover:bg-yellow-400 items-center">
            <PhoneIncoming size={32} />
            <div className="flex items-center justify-center flex-col">
              <p>دریافت</p> <p>کاتالوگ</p>
            </div>
          </button>
          <button className="flex shadow-xl transition w-64 justify-around bg-white border h-20 hover:bg-yellow-400 items-center">
            <PhoneIncoming size={32} />
            <div className="flex items-center justify-center flex-col">
              <p>ارتباط با ما</p> <p>info@sazandeh.com</p>
            </div>
          </button>
          <button className="flex shadow-xl transition w-64 justify-around bg-white border h-20 hover:bg-yellow-400 items-center">
            <PhoneIncoming size={32} />
            <div className="flex items-center justify-center flex-col">
              <p>تماس با ما</p> <p>123-542-8695</p>
            </div>
          </button>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="pt-20 justify-center items-center flex flex-col">
            <div>
              <p className="bg-sky-400 justify-center items-center flex w-14 text-white">
                سایر
              </p>
            </div>
            <p className="font-bold text-2xl">خدمات سازنده</p>
          </div>
          <div className="flex  justify-center w-full h-5/6 ">
            <div className="w-full pt-28 space-y-8  items-end text-end flex flex-col">
              <div className="flex items-center text-center px-8 flex-col">
                <p>
                  <BookOpen size={32} />
                </p>
                <p className="font-bold">برق کشی ساختمان</p>
                <p className="w-2/3 text-center">
                  وم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                </p>
              </div>
              <div className="flex items-center text-center px-8 flex-col">
                <p>
                  <House size={32} />
                </p>
                <p className="font-bold">امور اجرایی و زیرساختی</p>
                <p className="w-2/3 text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، قرار گیرد
                </p>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${manWithSmile})` , backgroundPosition: 'center' , backgroundSize: 'cover'}} className="flex w-88 w-full rounded-t-3xl bg-gray-300">
              {/* <img
                className="object-contain w-full h-full"
                src={manWithSmile}
                alt=""
              /> */}
            </div>
            <div className="w-full pt-28 space-y-8  items-start text-left flex flex-col">
              <div className="pb-2 flex items-center text-center px-8 flex-col">
                <p>
                  <Lightbulb size={32} />
                </p>
                <p className="font-bold">برق کشی ساختمان</p>
                <p className="w-2/3 text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، قرار گیرد
                </p>
              </div>
              <div className="pb-2 flex items-center text-center px-8 flex-col">
                <p>
                  <PictureInPicture size={32} />
                </p>
                <p className="font-bold">امور اجرایی و زیرساختی</p>
                <p className="w-2/3 text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، قرار گیرد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
