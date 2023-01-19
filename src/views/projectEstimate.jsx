import { Input } from "@mantine/core";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function ProjectEstimate() {
  return (
    <div className="w-screen h-full bg-gray-200">
      <Navbar />
      <div className="flex text-center flex-row-reverse justify-center lg:justiy-end overflow-hidden items-center w-full h-rem26 bg-black">
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">
            محاسبه ی هزینه ی بازسازی
          </p>
          <div className="flex text-white space-x-3 p-2 items-center align-center flex-row">
            <p className="text-yellow-500">محاسبه ی هزینه ی بازسازی</p>
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
      <div className="w-screen h-full bg-gray-200 lg:px-28 py-10 flex items-center flex-col">
        <h1 className=" my-6 text-3xl border-b-8 border-yellow-400 rounded-md pb-5">
          کاشی کاری و سرامیک کاری
        </h1>
        <div className="h-auto w-full bg-white my-3 flex justify-center space-y-9 py-12  items-center  text-center px-4 lg:px-32 flex-col">
          <div className="w-full flex lg:flex-row flex-col lg:items-start justify-center lg:justify-end space-y-4 lg:space-x-10">
            <div className="flex items-center space-x-3">
              <h2>متر مربع کاشی و سرامیک کاری کف</h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
            <div className="flex items-center space-x-3">
              <h2>متر مربع کاشی و سرامیک کاری دیوار چسبی</h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col lg:items-start justify-center lg:justify-end space-y-4 lg:space-x-10">
            <div className="flex items-center space-x-3">
              <h2>متر مربع کاشی و سرامیک کاری دیوار دوغابی</h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
            <div className="flex items-center space-x-3">
              <h2>متر مربع کاشی بین کابینت آشپزخانه ی چسبی</h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <h2>متر مربع کاشی بین کابینت آشپزخانه ی دوغابی</h2>
            <Input
              variant="filled"
              placeholder="عدد را وارد کنید"
              radius="xs"
              size="md"
            />
          </div>
        </div>
        <h1 className=" my-6 text-3xl border-b-8 border-yellow-400 rounded-md pb-5">
          رنگ و نقاشی
        </h1>
        <div className="h-auto w-full bg-white my-3 flex justify-center space-y-9 py-12  items-center  text-center px-4 lg:px-32 flex-col">
          <div className="w-full flex lg:flex-row flex-col lg:items-center   justify-center lg:justify-end space-y-4 lg:space-x-10">
            <div className="flex items-center space-x-3">
              <h2>متر مربع پتینه کاری ساده</h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
            <div className="flex items-center space-x-3">
              <h2>متر مربع پتینه کاری ابر و باد </h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col lg:items-center   justify-center lg:justify-end space-y-4 lg:space-x-10">
            <div className="flex items-center space-x-3">
              <h2>متر مربع نقاشی ساختمان رنگ روغنی</h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
            <div className="flex items-center space-x-3">
              <h2>متر مربع نقاشی ساختمان رنگ پلاستیک</h2>
              <Input
                variant="filled"
                placeholder="عدد را وارد کنید"
                radius="xs"
                size="md"
              />
            </div>
          </div>
        </div>
        <button className="px-6 py-3 my-7 rounded-sm text-xl border-b-4 border-yellow-400 bg-neutral-900 text-white transition ease-in duration-300 hover:bg-yellow-400 hover:text-neutral-900 hover:border-neutral-900">
          محاسبه ی هزینه ی کل
        </button>
      </div>
    </div>
  );
}
