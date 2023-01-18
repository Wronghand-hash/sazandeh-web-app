import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../components/navbar";
import AboutusImage from "../assets/images/aboutusImage.webp";
import { Link } from "react-router-dom";
import mainPageProjects3 from "../assets/images/mainPageProjects3.webp";
import mainPageProjects4 from "../assets/images/mainPageProjects4.webp";
import mainPageProjects5 from "../assets/images/mainPageProjects5.webp";
import { Carousel } from "@mantine/carousel";
import { Image, Select } from "@mantine/core";
import { ShoppingCart, Sparkle } from "phosphor-react";
import Footer from "../components/footer";

export default function service() {
  return (
    <div className="w-full bg-gray-300 h-full">
      <Navbar />
      <div className="flex h-8 lg:h-44 pt-28"></div>
      <div className="flex p-5  lg:p-10 w-full h-full">
        <div className="flex flex-col bg-gray-50 h-full w-full">
          <div className="flex flex-row-reverse h-14 p-5 items-center space-x-2 text-gray-400 border-b-4 border-b-gray-400 w-full justify-start">
            <div className="">
              <button>
                <Link to="/">خانه</Link>
              </button>
            </div>
            <AiOutlineLeft />
            <div className="">
              <button>
                <Link to="/news">کالا</Link>
              </button>
            </div>
            <AiOutlineLeft />
            <div className="">
              <button>
                <Link to="/news">طراحی و معماری</Link>
              </button>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-start self-end lg:p-5 items-center lg:w-full w-full lg:h-full h-72">
            <div className="flex h-full lg:w-2/3">
              <Carousel
                slideSize="100%"
                dragFree
                height={400}
                slideGap="sm"
                controlsOffset="xl"
                controlSize={32}
              >
                <Carousel.Slide>
                  <Image src={mainPageProjects5} alt />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Image src={mainPageProjects4} alt />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Image src={mainPageProjects3} alt />
                </Carousel.Slide>
              </Carousel>
            </div>
            <div className="flex hidden lg:flex w-full h-full justify-center  flex-col">
              <div className="flex justify-end text-right w-full">
                <h1 className="text-4xl font-bold p-5">طراحی و معماری داخلی</h1>
              </div>
              <div className="flex p-5 text-center lg:text-right w-full lg:justify-end justify-center">
                <Select
                  label="نوع کار را انتخاب فرمایید"
                  placeholder="نوع کار"
                  data={[
                    { value: "رنگامیزی", label: "رنگامیزی" },
                    { value: "تعمیرات", label: "تعمیرات" },
                    { value: "svelte", label: "سفید کاری" },
                    { value: "دکوراسیون", label: "دکوراسیون" },
                  ]}
                />
              </div>
              <div className="flex p-5 w-full lg:justify-end justify-center font-bold text-green-500 p-4 space-x-2 text-2xl">
                <p>تومان</p>
                <p>40000</p>
              </div>
              <div className="flex flex-row-reverse p-5 w-full justify-around">
                <button className="flex py-4 px-2 rounded shadow-2xl justify-around items-center w-32 transition hover:bg-green-800 bg-green-600 text-gray-100">
                  <p>
                    <ShoppingCart size={32} />
                  </p>
                  <p>افزودن به</p>
                </button>
                <button className="flex py-4 px-2 rounded shadow-2xl justify-around items-center w-32 transition hover:bg-red-800 bg-red-600 text-gray-100">
                  <p>
                    <Sparkle size={32} />
                  </p>
                  <p>افزودن به</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden w-full h-full justify-center  flex-col">
            <div className="flex justify-end text-right w-full">
              <h1 className="text-4xl font-bold p-5">طراحی و معماری داخلی</h1>
            </div>
            <div className="flex text-right w-full justify-center">
              <Select
                label="نوع کار را انتخاب فرمایید"
                placeholder="نوع کار"
                data={[
                  { value: "رنگامیزی", label: "رنگامیزی" },
                  { value: "تعمیرات", label: "تعمیرات" },
                  { value: "svelte", label: "سفید کاری" },
                  { value: "دکوراسیون", label: "دکوراسیون" },
                ]}
              />
            </div>
            <div className="flex w-full justify-center font-bold text-green-500 p-4 space-x-2 text-2xl">
              <p>تومان</p>
              <p>40000</p>
            </div>
            <div className="flex p-5 w-full justify-around">
              <button className="flex py-4 px-2 rounded shadow-2xl justify-around items-center w-32 bg-green-600 text-gray-100">
                <p>
                  <ShoppingCart size={32} />
                </p>
                <p>افزودن به</p>
              </button>
              <button className="flex py-4 px-2 rounded shadow-2xl justify-around items-center w-32 bg-red-600 text-gray-100">
                <p>
                  <Sparkle size={32} />
                </p>
                <p>افزودن به</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col h-full w-full">
            <div className="flex w-full justify-end text-right h-16 border-b-2 border-gray-700">
              <p className="p-5">دیگر خدمات</p>
            </div>
            <div className="flex justify-around items-center p-5 w-full h-full">
              <div className="flex flex-col w-52 h-72 justify-center items-center bg-gray-200 rounded-lg shadow-2xl">
                <div className="w-52 h-52 bg-green-300"></div>
                <h1>لوله کشی</h1>
                <p className="text-green-800">
                  <p>تومان</p>
                  <p>30000</p>
                </p>
              </div>
              <div className="flex flex-col w-52 h-72 justify-center items-center bg-gray-200 rounded-lg shadow-2xl">
                <div className="w-52 h-52 bg-green-300"></div>
                <h1>لوله کشی</h1>
                <p className="text-green-800">
                  <p>تومان</p>
                  <p>30000</p>
                </p>
              </div>
              <div className="flex flex-col w-52 h-72 justify-center items-center bg-gray-200 rounded-lg shadow-2xl">
                <div className="w-52 h-52 bg-green-300"></div>
                <h1>لوله کشی</h1>
                <p className="text-green-800">
                  <p>تومان</p>
                  <p>30000</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
