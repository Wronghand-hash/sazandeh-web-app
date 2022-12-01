import Navbar from "../components/navbar";
import {
  Timer,
  HeartStraight,
  Users,
  CaretLeft,
  CaretRight,
} from "phosphor-react";
export default function homePage() {
  return (
    <div>
      <Navbar />
      <div className="flex justiy-end items-center w-screen h-carousel  bg-yellow-400">
        <div className="flex w-full h-full items-center flex-col pb-16 pr-96 space-y-4 justify-end">
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
      <div className="w-screen h-60 bg-slate-100 flex mb-10">
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
        <div className="h-full w-1/3 bg-slate-400 flex items-center">
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
          <div className="w-full h-full py-10 flex items-center">
            <div className=" h-full w-1/4 bg-yellow-200"></div>
            <div className=" h-full w-1/4 bg-yellow-200"></div>
            <div className=" h-full w-1/4 bg-yellow-200"></div>
            <div className=" h-full w-1/4 bg-yellow-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
