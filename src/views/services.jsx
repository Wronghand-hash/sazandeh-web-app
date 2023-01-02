import Navbar from "../components/navbar";
import { AiOutlineLeft } from "react-icons/ai";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageGraphic from "../assets/images/mainPageGraphic.webp";
import {
  Copy,
  Calculator,
  RocketLaunch,
  Activity,
  PhoneIncoming,
  ArrowCircleRight,
  House,
  BookOpen,
  Lightbulb,
  ArchiveBox,
  GlobeStand,
  Users,
  PictureInPicture,
} from "phosphor-react";
import { useState } from "react";
import manWithSmile from "../assets/images/manWithSmile.webp";
import { Link } from "react-router-dom";

export default function services() {
  const [services, setServices] = useState([
    mainPageProjects3,
    mainPageProjects4,
    mainPageProjects5,
    mainPageProjects6,
  ]);
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />
      <div className="flex flex-row-reverse justiy-end overflow-hidden items-center w-full h-rem26 bg-black">
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">خدمات ما</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">خدمات ما</p>
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
      <div className="flex w-full items-center py-20 justify-center ">
        <div className="flex flex-col lg:flex-row lg:space-y-0 lg:space-x-2  space-y-10 lg:space-x-2 py-4 w-9/12 ">
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="w-88 flex-col flex hover:bg-blue-500 hover:text-white transition-all bg-gray-300 h-76"
              >
                <div className=" transition-all">
                  <img src={service} alt="" />
                </div>
                <div className="flex w-full py-3 h-full px-2 justify-around items-center align-center">
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
        <div className="flex flex-col lg:flex-row justify-center space-y-2 lg:space-x-8 items-center -translate-y-10">
          <button className="flex shadow-xl transition w-64 justify-around bg-white border h-20 hover:bg-yellow-400 items-center">
            <ArchiveBox size={32} />
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
        <div className="flex  items-center justify-center flex-col">
          <div className="pt-20 justify-center items-center flex flex-col">
            <div>
              <p className="bg-sky-400 justify-center items-center flex w-14 text-white">
                سایر
              </p>
            </div>
            <p className="font-bold text-2xl">خدمات سازنده</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center w-full h-5/6 ">
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
            <div
              style={{
                backgroundImage: `url(${manWithSmile})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="flex hidden lg:flex w-88 w-full rounded-t-3xl bg-gray-300"
            >
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
      <div className="flex pt-20 w-full items-center justify-center h-full flex-col">
        <div className="flex justify-center items-center w-full h-24 flex-col">
          <h1 className="bg-sky-400 text-white px-4 py-0">workflow</h1>
          <h2 className="text-2xl font-bold">روال دریافت خدمات و محصولات</h2>
        </div>
        <div className="flex flex-col space-y-14  lg:space-y-0 lg:flex-row-reverse pt-20 justify-center md:space-x-5 lg:space-x-5 px-5 items-center w-full">
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="relative flex items-center justify-center h-20 border-2 border-dashed border-gray-300 w-20">
              <p className="px-2 flex text-center transform -translate-y-4 bg-yellow-400 absolute right-7 top-0">
                1
              </p>
              <Copy size={30} weight="fill" />
            </div>
            <div className="flex items-center text-center flex-col w-64 space-y-4">
              <h1 className="text-lg font-bold">انتخاب محصول و خدمت</h1>
              <h5 className="text-sm">
                لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="relative flex items-center justify-center h-20 border-2 border-dashed border-gray-300 w-20">
              <p className="px-2 flex text-center transform -translate-y-4 bg-yellow-400 absolute right-7 top-0">
                2
              </p>
              <Calculator size={30} weight="fill" />
            </div>
            <div className="flex items-center text-center flex-col w-64 space-y-4">
              <h1 className="text-lg font-bold">براورد هزینه</h1>
              <h5 className="text-sm">
                لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="relative flex items-center justify-center h-20 border-2 border-dashed border-gray-300 w-20">
              <p className="px-2 flex text-center transform -translate-y-4 bg-yellow-400 absolute right-7 top-0">
                3
              </p>
              <RocketLaunch size={30} weight="fill" />
            </div>
            <div className="flex items-center text-center flex-col w-64 space-y-4">
              <h1 className="text-lg font-bold">مشاوره و تایید نهایی</h1>
              <h5 className="text-sm">
                لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="relative flex items-center justify-center h-20 border-2 border-dashed border-gray-300 w-20">
              <p className="px-2 flex text-center transform -translate-y-4 bg-yellow-400 absolute right-7 top-0">
                4
              </p>
              <Activity size={30} weight="fill" />
            </div>
            <div className="flex items-center text-center flex-col w-64 space-y-4">
              <h1 className="text-lg font-bold">اجرای پروژه</h1>
              <h5 className="text-sm">
                لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h5>
            </div>
          </div>
        </div>
        <div className="w-screen mt-20 h-auto hidden lg:flex items-center justify-center">
          <img className="relative" src={mainPageGraphic} alt="" />
          <button className="transition duration-300 ease-in hover:bg-neutral-900 hover:text-yellow-400 absolute right-80 mr-28 font-bold rounded-sm mt-28   px-4 py-1 bg-white text-neutral-900 text-lg">
            تماس با ما
          </button>
          <h1 className="text-md font-bold absolute mt-10 ml-8 text-right">
            بهینه ترین هزینه و مناسب ترین زمان برای خدمات ساختمانی
            <p className="text-sm absolute font-light">
              لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </h1>
        </div>
        <div className="flex  items-center space-x-12 justify-center bg-blue-600 w-full h-32 mt-10">
          <div className="flex text-white items-center justify-center flex-col">
            <div className="flex justify-center space-x-2">
              <p className="text-4xl font-bold">165</p>
              <p>
                <RocketLaunch size={24} />
              </p>
            </div>
            <div className="font-bold">پروژه های موفق</div>
          </div>
          <div className="flex border-r border-l px-5 text-white items-center justify-center flex-col">
            <div className="flex justify-center space-x-2">
              <p className="text-4xl font-bold">21</p>
              <p>
                <GlobeStand size={24} weight="fill" />
              </p>
            </div>
            <div className="font-bold">متخصصان</div>
          </div>
          <div className="flex text-white items-center justify-center flex-col">
            <div className="flex justify-center space-x-2">
              <p className="text-4xl font-bold">85</p>
              <p>
                <Users size={24} />
              </p>
            </div>
            <div className="font-bold">مشتریان ما</div>
          </div>
        </div>
      </div>
    </div>
  );
}
