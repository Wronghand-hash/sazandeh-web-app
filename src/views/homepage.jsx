import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  Timer,
  HeartStraight,
  Users,
  CaretLeft,
  CaretRight,
  ArrowCircleRight,
  Copy,
  Calculator,
  RocketLaunch,
  Activity,
  GlobeStand,
  Quotes,
} from "phosphor-react";
import { BsPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import mainPageBg from "../assets/images/mainPageBg.webp";
import mainPageProjects from "../assets/images/mainPageProjects.webp";
import mainPageProjects2 from "../assets/images/mainPageProjects2.webp";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageProjects7 from "../assets/images/mainPageProjects7.webp";
import mainPageGraphic from "../assets/images/mainPageGraphic.webp";
import butanLogo from "../assets/images/butanLogo.webp";
import akhavanLogo from "../assets/images/akhavanLogo.webp";
import alborzLogo from "../assets/images/alborzLogo.webp";
import iransteelLogo from "../assets/images/iransteelLogo.webp";
import { useState } from "react";

export default function homePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = () => {
    let review = {
      phoneNumber,
    };
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex justiy-start relative items-center w-screen h-96 lg:h-auto  ">
        <img
          className="lg:flex hidden  w-full h-full object-contain"
          src={mainPageBg}
          alt=""
        />
        <div className="flex lg:my-0 lg:bg-transparent bg-gray-200 lg:mb-0 mb-0 w-full lg:absolute h-full items-center flex-col lg:right-72 lg:pb-10 space-y-4 justify-end">
          <h3 className="bg-white text-black p-2">
            از صفر تا صد پروژه های ساختمانی در کنار شما هستیم
          </h3>
          <h1 className="lg:text-5xl text-2xl text-neutral-900 text-center lg:text-slate-100 w-96 font-black">
            ارائه خدمات و محصولات ساختمانی
          </h1>
          <button className="px-6 py-3 my-7 rounded-sm text-xl border-b-4 border-yellow-400 bg-neutral-900 text-white transition ease-in duration-300 hover:bg-yellow-400 hover:text-neutral-900 hover:border-neutral-900">
            محاسبه هزینه ی بازسازی
          </button>
        </div>
      </div>
      <div className="w-screen h-auto lg:h-60 bg-gray-100 flex lg:flex-row flex-col-reverse mb-10">
        <div className="h-full w-full lg:w-4/6 flex lg:flex-row flex-col justify-end px-20 lg:space-y-0 space-y-5 lg:space-x-4 ">
          <div className="h-full w-60 space-y-1 flex items-end text-right justify-center flex-col">
            <div className="flex bg-yellow-400 text-neutral-900 w-10 h-10">
              <Users className="m-auto" size={20} weight="fill" />
            </div>
            <h1 className="text-lg font-black">زمان بندی و تحویل به موقع</h1>
            <h5 className="text-sm">
              لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h5>
          </div>
          <div className="h-full w-60 space-y-1 flex items-end text-right justify-center flex-col">
            <div className="flex bg-yellow-400 text-neutral-900 w-10 h-10">
              <HeartStraight className="m-auto" size={20} weight="fill" />
            </div>
            <h1 className="text-lg font-black">هزینه های مناسب و بهینه</h1>
            <h5 className="text-sm">
              لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h5>
          </div>
          <div className="h-full w-60 space-y-1 flex items-end text-right justify-center flex-col">
            <div className="flex bg-yellow-400 text-neutral-900 w-10 h-10">
              <Timer className="m-auto" size={20} weight="fill" />
            </div>
            <h1 className="text-lg font-black">تیم متخصص و حرفه ای</h1>
            <h5 className="text-sm">
              لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h5>
          </div>
        </div>
        <div className="h-full w-full lg:w-1/3 bg-gray-200 flex items-center justify-center lg:justify-start lg:my-0 my-6">
          <h1 className="text-3xl mx-7 text-center flex flex-col text-neutral-900 font-bold border-b-2 pb-5 border-blue-600 border-spacing-11 W-96">
            خدمات تخصصی
            <span className="text-2xl">ساختمانی و بازرگانی</span>
          </h1>
        </div>
      </div>
      <div className="w-screen mb-28 h-auto lg:h-rem26 flex bg-white lg:px-56 py-20">
        <div className="h-full w-full ">
          <div className="  flex items-center justify-between">
            <div className="flex items-center space-x-1 lg:ml-0 ml-8">
              <button className="px-3 py-3 rounded-sm text-md bg-neutral-900 transition ease-in duration-300 hover:bg-blue-600 cursor-pointer  text-white">
                <CaretLeft size={20} weight="fill" />
              </button>
              <button className="px-3 py-3 rounded-sm text-md bg-neutral-900 transition ease-in duration-300 hover:bg-blue-600 cursor-pointer  text-white">
                <CaretRight size={20} weight="fill" />
              </button>
            </div>
            <div className="flex flex-col items-center px-8">
              <h3 className="py-2 text-md px-1 bg-yellow-400 text-neutral-900">
                We Do
              </h3>
              <h1 className="text-3xl my-2 font-bold">خدمات ما</h1>
            </div>
          </div>
          <div className="w-full h-full  py-3 flex lg:flex-row-reverse flex-col  lg:space-y-0 space-y-8 space-x-2 items-center">
            <div className=" h-full w-full transition ease-in duration-300 hover:bg-blue-600 cursor-pointer lg:w-1/4 bg-gray-300">
              <div className="w-full h-full lg:h-3/5 bg-white">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects}
                  alt=""
                />
              </div>
              <div className="w-full h-full lg:h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1 my-5">
                  <h1 className="text-lg font-black text-right ">
                    بازسازی و تعمیرات
                  </h1>
                  <h1 className="text-md  text-right">منازل و ادارات</h1>
                </div>
                <ArrowCircleRight size={25} weight="fill" />
              </div>
            </div>
            <div className=" h-full w-full transition ease-in duration-300 hover:bg-blue-600 cursor-pointer lg:w-1/4 bg-gray-300">
              <div className="w-full h-3/5 bg-white">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects2}
                  alt=""
                />
              </div>
              <div className="w-full h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1 my-5">
                  <h1 className="text-lg font-black text-right ">
                    دکوراسیون داخلی
                  </h1>
                  <h1 className="text-md  text-right">منازل و ادارات</h1>
                </div>
                <ArrowCircleRight size={25} weight="fill" />
              </div>
            </div>
            <div className=" h-full w-full transition ease-in duration-300 hover:bg-blue-600 cursor-pointer lg:w-1/4 bg-gray-300">
              <div className="w-full h-3/5 bg-white">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects3}
                  alt=""
                />
              </div>
              <div className="w-full h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1 my-5">
                  <h1 className="text-lg font-black text-right ">
                    پیاده سازی و اجرای
                  </h1>
                  <h1 className="text-md  text-right">پروژه های ساختمانی</h1>
                </div>
                <ArrowCircleRight size={25} weight="fill" />
              </div>
            </div>
            <div className=" h-full w-full transition ease-in duration-300 hover:bg-blue-600 cursor-pointer lg:w-1/4 bg-gray-300">
              <div className="w-full h-3/5 bg-white">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects4}
                  alt=""
                />
              </div>
              <div className="w-full h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1 my-5">
                  <h1 className="text-lg font-black text-right ">
                    طراحی و معماری
                  </h1>
                  <h1 className="text-md  text-right">ساختمان</h1>
                </div>
                <ArrowCircleRight size={25} weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mb-8 h-auto bg-gray-200 pt-24">
        <div className="flex lg:flex-row flex-col-reverse w-full items-center justify-between  lg:px-52  mb-7">
          <div className="flex items-center space-x-5">
            <h3 className="text-md font-light transition ease-in duration-300 hover:bg-yellow-400 p-3 cursor-pointer">
              همه
            </h3>
            <h3 className="text-md font-light transition ease-in duration-300 hover:bg-yellow-400 p-3 cursor-pointer">
              دکوراسیون
            </h3>
            <h3 className="text-md font-light transition ease-in duration-300 hover:bg-yellow-400 p-3 cursor-pointer">
              اداری
            </h3>
            <h3 className="text-md font-light transition ease-in duration-300 hover:bg-yellow-400 p-3 cursor-pointer">
              نقشه و طرح
            </h3>
            <h3 className="text-md font-light transition ease-in duration-300 hover:bg-yellow-400 p-3 cursor-pointer">
              بازسازی
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="py-2 text-md px-1 bg-yellow-400 text-neutral-900">
              PROJECTS
            </h3>
            <h1 className="text-3xl my-2 font-bold">پروژه های ما</h1>
          </div>
        </div>
        <div className="h-rem26 w-full flex">
          <div className="h-full w-2/5 flex items-center">
            <img
              className=" w-full h-full object-fill"
              src={mainPageProjects}
              alt=""
            />
          </div>
          <div className="h-full w-3/5  ">
            <div className="w-full h-1/2 flex  ">
              <div className=" w-1/3 h-full  ">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects2}
                  alt=""
                />
              </div>
              <div className=" w-1/3 h-full  ">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects3}
                  alt=""
                />
              </div>
              <div className=" w-1/3 h-full  ">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects4}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-1/2 flex  ">
              <div className=" w-1/3 h-full  ">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects5}
                  alt=""
                />
              </div>
              <div className=" w-1/3 h-full  ">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects6}
                  alt=""
                />
              </div>
              <div className=" w-1/3 h-full  ">
                <img
                  className=" w-full h-full object-fill"
                  src={mainPageProjects7}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto lg:h-rem26  pt-10 bg-white">
        <div className="w-screen flex items-center flex-col">
          <h3 className="py-2 text-md px-1 bg-blue-600 text-white">WORKFLOW</h3>
          <h1 className="text-3xl my-2 font-bold">
            روال دریافت خدمات و محصولات
          </h1>

          <div className="w-full h-auto space-y-6 lg:space-y-0 lg:h-56 flex items-center flex-col-reverse lg:flex-row-reverse justify-around px-32 my-14 ">
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
        </div>
      </div>
      <div className="w-screen h-auto hidden lg:flex items-center justify-center">
        <img className="relative" src={mainPageGraphic} alt="" />

        <h1 className="text-md font-bold absolute mt-10 ml-8 text-right">
          بهینه ترین هزینه و مناسب ترین زمان برای خدمات ساختمانی
          <p className="text-sm absolute font-light">
            لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </h1>
      </div>
      <div className="flex items-center space-x-12 justify-center bg-blue-600  w-full h-32">
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
      <div className="h-auto lg:h-rem33 w-screen flex flex-col lg:flex-row-reverse items-center justify-between">
        <div className="h-full w-96 py-14">
          <div
            className="flex flex-col items-center my-5
          "
          >
            <Link to="/news">
              <h3 className="py-2 cursor-pointer text-md px-1 bg-yellow-400 text-neutral-900">
                خبرنامه ما
              </h3>
            </Link>
            <h1 className="text-xl my-2 font-bold">
              اطلاع از تخفیفات و جشنواره ها
            </h1>
          </div>
          <div className="w-full h-auto flex justify-center space-y-7 px-20 text-right flex-col items-center">
            <div className="flex w-full border">
              <label
                className="bg-gray-100 flex justify-center items-center p-3"
                htmlFor="phoneNumber"
              >
                <BsPhoneFill />
              </label>
              <input
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                className="w-full   text-right p-2"
                placeholder="شماره تماس"
                name="phoneNumber"
                type="number"
              />
            </div>
            <h1 className="text-md">
              برای اطلاع از جدیدترین محصولات و اطلاع از تخفیفات و جشنواره های ما
              شماره تماس خود را وارد کنید
            </h1>
          </div>
        </div>
        <div className="h-full w-screen lg:px-0 px-8 lg:w-textArea py-14 text-right">
          <div
            className="flex flex-col items-center my-5
          "
          >
            <h3 className="py-2 text-md px-1 bg-yellow-400 text-neutral-900">
              CLIENTS
            </h3>
            <h1 className="text-xl my-2 font-bold">نظرات مشتریان ما </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-x-1">
              <button className="px-3 py-3 rounded-sm text-md bg-neutral-900 transition ease-in duration-300 hover:bg-blue-600 cursor-pointer  text-white">
                <CaretLeft size={20} weight="fill" />
              </button>
              <button className="px-3 py-3 rounded-sm text-md bg-neutral-900 transition ease-in duration-300 hover:bg-blue-600 cursor-pointer  text-white">
                <CaretRight size={20} weight="fill" />
              </button>
            </div>
            <Quotes className="text-gray-300" size={120} weight="fill" />
          </div>
          <h1>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </h1>
          <div className="flex my-6 border-t-4 py-1 justify-start items-center space-x-8">
            <div className="w-20 h-20 bg-neutral-900"></div>
            <div className="flex flex-col">
              <p>آقای فلانی</p>
              <p>مدیر عامل آداک فناوری</p>
            </div>
          </div>
        </div>
        <div className="h-full   flex items-center flex-col w-blog py-14">
          <div
            className="flex flex-col items-center my-5
          "
          >
            <h3 className="py-2 text-md px-1 bg-yellow-400 text-neutral-900">
              LATEST
            </h3>
            <h1 className="text-xl my-2 font-bold">وبلاگ چاره جو </h1>
          </div>
          <div className="w-full   flex justify-center items-center">
            <img
              className=" w-80 object-contain"
              src={mainPageProjects6}
              alt=""
            />
          </div>
          <div className="px-14 my-4 flex space-y-2 text-right items-end flex-col">
            <h1 className="font-bold text-lg">
              بازسازی منزل شما تنها در 2 هفته
            </h1>
            <h5 className="text-sm">
              لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </h5>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto lg:h-40 px-10 py-5 my-9 flex lg:flex-row flex-col-reverse items-center justify-center">
        <div className="  h-full lg:space-y-0 space-y-6 flex lg:flex-row flex-col items-center lg:space-x-10">
          <button className="px-3 py-3 rounded-sm text-md bg-blue-600 text-white">
            <CaretLeft size={20} weight="fill" />
          </button>

          <div className="border-2    flex items-center justify-center border-gray-300   w-60 h-full">
            <img className="w-32 object-contain" src={butanLogo} alt="" />
          </div>
          <div className="border-2    flex items-center justify-center border-gray-300   w-60 h-full">
            <img className="w-32 object-contain" src={akhavanLogo} alt="" />
          </div>
          <div className="border-2    flex items-center justify-center border-gray-300   w-60 h-full">
            <img className="w-32 object-contain" src={iransteelLogo} alt="" />
          </div>
          <div className="border-2    flex items-center justify-center border-gray-300   w-60 h-full">
            <img className="w-32 object-contain" src={alborzLogo} alt="" />
          </div>
          <button className="px-3 py-3 rounded-sm text-md bg-neutral-900 text-white">
            <CaretRight size={20} weight="fill" />
          </button>
        </div>
        <div className="flex w-full flex-col mx-6 text-center items-center lg:my-0 my-4">
          <h3 className="py-2 text-md px-1 bg-yellow-400 text-neutral-900">
            PARTNERS
          </h3>
          <h1 className="text-4xl my-2 font-light">همکاران ما</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
