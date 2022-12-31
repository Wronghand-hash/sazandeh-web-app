import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../components/navbar";
import AboutusImage from "../assets/images/aboutusImage.webp";
import { Users, Coins, RocketLaunch, Heart, Clock } from "phosphor-react";
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
      <div className="flex flex-col lg:flex-row w-full h-full lg:h-96 px-14">
        <div className="flex text-3xl font-bold px-4 py-8 lg:py-0 w-full flex-col justify-center items-end h-full bg-gray-200">
          <p>فروش اقساطی</p>
          <p>ویژگیها و شرایط</p>
        </div>
        <div className="flex flex-col items-center p-5 space-y-2 justify-center">
          <div>
            <Users className="p-2 bg-yellow-400" size={36} />
          </div>
          <h1 className="font-bold">تیم متخصص و حرفه ای</h1>
          <div className="flex text-center justify-center items-center">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، قرار گیرد
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-5 space-y-2 justify-center">
          <div>
            <Heart className="p-2 bg-yellow-400" size={36} />
          </div>
          <h1 className="font-bold">هزینه های متناسب و بهینه</h1>
          <div className="flex text-center justify-center items-center">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، قرار گیرد
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center p-5 space-y-2 justify-center">
          <div>
            <Clock className="p-2 bg-yellow-400" size={36} />
          </div>
          <h1 className="font-bold">زمان بندی و تحویل به موقع</h1>
          <div className="flex text-center justify-center items-center">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، قرار گیرد
            </p>
          </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
