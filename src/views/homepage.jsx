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
} from "phosphor-react";
import mainPageBg from "../assets/images/mainPageBg.webp";
import mainPageProjects from "../assets/images/mainPageProjects.webp";
import mainPageProjects2 from "../assets/images/mainPageProjects2.webp";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageProjects7 from "../assets/images/mainPageProjects7.webp";
import mainPageGraphic from "../assets/images/mainPageGraphic.webp";

export default function homePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex justiy-start relative items-center w-screen h-auto  ">
        <img
          className="  w-full h-full object-contain"
          src={mainPageBg}
          alt=""
        />
        <div className="flex w-full absolute h-full items-center flex-col right-72 pb-16 space-y-4 justify-end">
          <h3 className="bg-white text-black p-2">
            از صفر تا صد پروژه های ساختمانی در کنار شما هستیم
          </h3>
          <h1 className="text-5xl text-slate-100 w-96 font-black">
            ارائه خدمات و محصولات ساختمانی
          </h1>
          <button className="px-6 py-3 rounded-sm text-md border-b border-yellow-400 bg-neutral-900 text-white">
            استعلام قیمت و مشاوره
          </button>
          <div className="space-x-2 py-2 flex items-center justify-center">
            <button className="px-3 py-3 font-black rounded-sm transition ease-in duration-300 hover:bg-yellow-400 hover:text-neutral-900 text-md border-b border-yellow-400 bg-neutral-900 text-white">
              استعلام قیمت
            </button>
            <button className="px-3 py-3 font-black rounded-sm transition ease-in duration-300 hover:bg-neutral-900  hover:text-white text-md border-b border-yellow-400 bg-yellow-400 text-neutral-900">
              تعمیرات
            </button>
            <button className="px-3 py-3 font-black rounded-sm transition ease-in duration-300 hover:bg-yellow-400 hover:text-neutral-900 text-md border-b border-yellow-400 bg-neutral-900 text-white">
              بازسازی
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen h-60 bg-gray-100 flex mb-10">
        <div className="h-full w-4/6 flex justify-end px-20 space-x-4 ">
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
        <div className="h-full w-1/3 bg-gray-200 flex items-center">
          <h1 className="text-3xl mx-7  flex flex-col text-neutral-900 font-bold border-b-2 pb-5 border-blue-600 border-spacing-11 W-96">
            خدمات تخصصی
            <span className="text-2xl">ساختمانی و بازرگانی</span>
          </h1>
        </div>
      </div>
      <div className="w-screen mb-28 h-rem26 flex bg-white px-56 py-20">
        <div className="h-full w-full ">
          <div className="  flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <button className="px-3 py-3 rounded-sm text-md bg-blue-600 text-white">
                <CaretLeft size={20} weight="fill" />
              </button>
              <button className="px-3 py-3 rounded-sm text-md bg-neutral-900 text-white">
                <CaretRight size={20} weight="fill" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="py-2 text-md px-1 bg-yellow-400 text-neutral-900">
                We Do
              </h3>
              <h1 className="text-3xl my-2 font-bold">خدمات ما</h1>
            </div>
          </div>
          <div className="w-full h-full py-10 flex space-x-2 items-center">
            <div className=" h-full w-1/4 bg-gray-200">
              <div className="w-full h-3/5 bg-white"></div>
              <div className="w-full h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-lg font-black text-right">
                    دکوراسیون داخلی
                  </h1>
                  <h1 className="text-md  text-right">منازل و ادارات</h1>
                </div>
                <ArrowCircleRight size={20} weight="fill" />
              </div>
            </div>
            <div className=" h-full w-1/4 bg-gray-200">
              <div className="w-full h-3/5 bg-white"></div>
              <div className="w-full h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-lg font-black text-right">
                    دکوراسیون داخلی
                  </h1>
                  <h1 className="text-md  text-right">منازل و ادارات</h1>
                </div>
                <ArrowCircleRight size={20} weight="fill" />
              </div>
            </div>{" "}
            <div className=" h-full w-1/4 bg-gray-200">
              <div className="w-full h-3/5 bg-white"></div>
              <div className="w-full h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-lg font-black text-right">
                    دکوراسیون داخلی
                  </h1>
                  <h1 className="text-md  text-right">منازل و ادارات</h1>
                </div>
                <ArrowCircleRight size={20} weight="fill" />
              </div>
            </div>{" "}
            <div className=" h-full w-1/4 bg-gray-200">
              <div className="w-full h-3/5 bg-white"></div>
              <div className="w-full h-2/5 flex items-center justify-around">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-lg font-black text-right">
                    دکوراسیون داخلی
                  </h1>
                  <h1 className="text-md  text-right">منازل و ادارات</h1>
                </div>
                <ArrowCircleRight size={20} weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mb-8 h-auto bg-gray-200 pt-24">
        <div className="flex w-full items-center justify-between  px-52  mb-7">
          <div className="flex items-center space-x-5">
            <h3 className="text-md font-light">همه</h3>
            <h3 className="text-md font-light">دکوراسیون</h3>
            <h3 className="text-md font-light">اداری</h3>
            <h3 className="text-md font-light">نقشه و طرح</h3>
            <h3 className="text-md font-light">بازسازی</h3>
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
      <div className="w-screen h-rem26  pt-10 bg-white">
        <div className="w-screen flex items-center flex-col">
          <h3 className="py-2 text-md px-1 bg-blue-600 text-white">WORKFLOW</h3>
          <h1 className="text-3xl my-2 font-bold">
            روال دریافت خدمات و محصولات
          </h1>

          <div className="w-full h-56 flex items-center flex-row-reverse justify-around px-32 my-14 ">
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
                <Calculator size={30} weight="fill" />{" "}
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
      <div className="w-screen h-auto flex items-center justify-center">
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
      <div className="flex items-center space-x-12 justify-center bg-blue-600 w-full h-32">
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
              <GlobeStand size={24} weight="fill" />{" "}
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
      <Footer />
    </div>
  );
}
