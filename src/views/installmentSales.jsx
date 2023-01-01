import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../components/navbar";
import AboutusImage from "../assets/images/aboutusImage.webp";
import { Disclosure } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import {
  Users,
  Coins,
  RocketLaunch,
  Copy,
  Calculator,
  Activity,
  Clock,
  GlobeStand,
} from "phosphor-react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function installmentSales() {
  const [installmentPrice, setInstallmentPrice] = useState(200000000);
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />

      <div
        style={{
          background:
            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
          backgroundImage: `url(${AboutusImage})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justiy-end overflow-hidden items-center w-full h-rem26 bg-black"
      >
        <div className="hidden lg:absolute w-96 h-96 bg-yellow-400 absolute transform rotate-45 overflow-hidden -translate-x-64 overflow-hidden -translate-y-8"></div>
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">فروش اقساطی</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">فروش اقساطی</p>
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
      <div className="flex pt-20 pb-10 w-full items-center justify-center h-full flex-col">
        <div className="flex justify-center items-center w-full h-24 flex-col">
          <h1 className="bg-sky-400 text-white px-4 py-0">workflow</h1>
          <h2 className="text-2xl font-bold">
            روال دریافت خدمات تسهیلات اقساطی
          </h2>
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
              <h1 className="text-lg font-bold">
                ثبت درخواست و بارگذاری مدارک
              </h1>
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
              <h1 className="text-lg font-bold">ثبت امضا الکترونیکی</h1>
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
              <h1 className="text-lg font-bold">امضای قرارداد ها</h1>
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
              <h1 className="text-lg font-bold">دریافت تسهیلات اقساطی</h1>
              <h5 className="text-sm">
                لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </h5>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 bg-yellow-100 space-y-2 w-9/12 rounded-2xl bg-white p-2">
          <div className="flex w-full text-center justify-center items-center font-bold text-3xl">
            برای تهیه مدارک به کمک نیاز داری؟
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row-reverse border-b py-2 bg-gray-200 rounded w-full justify-between rounded-lg text-sm font-medium text-right">
                  <span>مدارک را چطور تهیه کنم؟</span>
                  <CaretDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" bg-gray-900  text-right p-4 text-sm text-gray-50">
                  لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row-reverse border-b py-2 bg-gray-200 rounded w-full justify-between rounded-lg text-sm font-medium text-right">
                  <span>مدارک را چطور تهیه کنم؟</span>
                  <CaretDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" bg-gray-900  text-right p-4 text-sm text-gray-50">
                  لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row-reverse border-b py-2 bg-gray-200 rounded w-full justify-between rounded-lg text-sm font-medium text-right">
                  <span>چرا میتونید به ما اطمینان کنید؟</span>
                  <CaretDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" bg-gray-900  text-right p-4 text-sm text-gray-50">
                  لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row-reverse border-b py-2 bg-gray-200 rounded w-full justify-between rounded-lg text-sm font-medium text-right">
                  <span>امضای الکترونیکی چیه؟</span>
                  <CaretDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" bg-gray-900  text-right p-4 text-sm text-gray-50">
                  لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-12 justify-center  bg-blue-600 w-full h-32">
        <div className="flex text-white items-center justify-center flex-col">
          <div className="flex justify-center space-x-2">
            <p className="text-4xl font-bold">32</p>
            <p>
              <RocketLaunch size={24} />
            </p>
          </div>
          <div className="font-bold">پروژه های موفق</div>
        </div>
        <div className="flex border-r border-l px-5 text-white items-center justify-center flex-col">
          <div className="flex justify-center space-x-2">
            <p className="text-4xl font-bold">32</p>
            <p>
              <RocketLaunch size={24} />
            </p>
          </div>
          <div className="font-bold">متخصصان</div>
        </div>
        <div className="flex text-white items-center justify-center flex-col">
          <div className="flex justify-center space-x-2">
            <p className="text-4xl font-bold">32</p>
            <p>
              <Users size={24} />
            </p>
          </div>
          <div className="font-bold">مشتری های ما</div>
        </div>
      </div>
      <div className="flex flex-col w-full py-8 lg:p-20 h-full justify-center items-center">
        <div className="flex bg-gray-50 border flex-col w-10/12 h-full rounded">
          <div className="flex justify-around items-center bg-gray-900 rounded w-full h-14">
            <div className="flex text-xl font-bold text-gray-50">
              فروشگاه سازنده
            </div>
            <div className="flex text-xl font-bold text-gray-50">
              محاسبه مبلغ
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex border-b w-full justify-end h-14 items-center px-5">
              <p className="font-bold">هزینه خدمات</p>
              <p className="bg-yellow-400 p-2 font-bold mx-2 flex justify-center items-center w-6 h-6">
                1
              </p>
            </div>
            <div className="flex flex-col lg:flex-row-reverse justify-around items-center px-8 h-32">
              <div className="flex space-x-5 w-full justify-end font-bold text-3xl">
                <p>تومان</p>
                <p>{installmentPrice}</p>
              </div>
              <div className="flex border w-full justify-start justify-center items-center w-full ">
                <label
                  className="bg-gray-100 flex justify-center w-2/12 items-center p-3"
                  htmlFor="phoneNumber"
                >
                  <Coins size={32} />
                </label>
                <input
                  onChange={(e) => {
                    setInstallmentPrice(e.target.value);
                  }}
                  className="w-96 font-bold  w-full  text-right p-3"
                  placeholder="مبلغ خدمت مورد نظر را وارد کنید"
                  name="phoneNumber"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex border-b w-full justify-end h-14 items-center px-5">
              <p className="font-bold">انتخاب مدت بازپرداخت</p>
              <p className="bg-yellow-400 p-2 font-bold mx-2 flex justify-center items-center w-6 h-6">
                2
              </p>
            </div>
            <div className="flex py-4 flex-col lg:flex-row lg:space-y-0 space-y-4 font-bold flex-row-reverse justify-around items-center px-8 h-full">
              <div className="flex hover:border-yellow-400 w-72 h-52 flex-col rounded-xl border-2 transition">
                <div className="flex font-bold hover:text-yellow-500 text-3xl hover:bg-white transition rounded-xl bg-gray-100 h-full w-full justify-center border-b items-center">
                  <h1>ماهه</h1>
                  <p>6</p>
                </div>
                <div className="flex  h-full flex-row-reverse w-full w-full justify-around border-b items-center">
                  <div className="flex">قسط ماهانه</div>
                  <div className="flex">
                    <p>2,500,000</p>
                    <p>تومان</p>
                  </div>
                </div>
                <div className="flex bg-gray-200 h-full flex-row-reverse w-full w-full justify-around border-b items-center">
                  <div className="flex">مجموع </div>
                  <div className="flex">
                    <p>25,500,000</p>
                    <p>تومان</p>
                  </div>
                </div>
              </div>
              <div className="flex hover:border-yellow-400 w-72 h-52 flex-col rounded-xl border-2 transition">
                <div className="flex font-bold hover:text-yellow-500 text-3xl hover:bg-white transition rounded-xl bg-gray-100 h-full w-full justify-center border-b items-center">
                  <h1>ماهه</h1>
                  <p>9</p>
                </div>
                <div className="flex  h-full flex-row-reverse w-full w-full justify-around border-b items-center">
                  <div className="flex">قسط ماهانه</div>
                  <div className="flex space-x-2">
                    <p>تومان</p>
                    <p>2,500,000</p>
                  </div>
                </div>
                <div className="flex bg-gray-200 h-full flex-row-reverse w-full w-full justify-around border-b items-center">
                  <div className="flex">مجموع </div>
                  <div className="flex space-x-2">
                    <p>تومان</p>
                    <p>25,500,000</p>
                  </div>
                </div>
              </div>
              <div className="flex hover:border-yellow-400 w-72 h-52 flex-col rounded-xl border-2 transition">
                <div className="flex font-bold hover:text-yellow-500 text-3xl hover:bg-white transition rounded-xl bg-gray-100 h-full w-full justify-center border-b items-center">
                  <h1>ماهه</h1>
                  <p>12</p>
                </div>
                <div className="flex  h-full flex-row-reverse w-full w-full justify-around border-b items-center">
                  <div className="flex">قسط ماهانه</div>
                  <div className="flex space-x-2">
                    <p>2,500,000</p>
                    <p>تومان</p>
                  </div>
                </div>
                <div className="flex bg-gray-200 h-full flex-row-reverse w-full w-full justify-around border-b items-center">
                  <div className="flex">مجموع </div>
                  <div className="flex space-x-2">
                    <p>25,500,000</p>
                    <p>تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center px-20 w-full h-24">
            <button className="bg-green-600 text-gray-50 hover:text-white hover:bg-green-400 transition w-full rounded h-14">
              ثبت درخواست
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
