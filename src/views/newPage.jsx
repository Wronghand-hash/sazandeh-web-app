import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../components/navbar";
import AboutusImage from "../assets/images/aboutusImage.webp";
import { Link } from "react-router-dom";
import { CaretDown, CaretUp, UsersThree, Eye } from "phosphor-react";
import { Menu, Button, Text } from "@mantine/core";
import News1 from "../assets/images/news1.webp";
import News2 from "../assets/images/news2.jpg";
import News3 from "../assets/images/news3.jpg";
import News4 from "../assets/images/news1.jpg";
import News5 from "../assets/images/news4.webp";
import Footer from "../components/footer";

export default function newsPage() {
  let news = [
    {
      title: "برگذاری کنکور دوباره",
      author: "کارگذاران",
      views: 140,
      date: "مهر 23",
      img: News4,
    },
    {
      title: "مسی قهرمان شد",
      author: "ادمین",
      views: 140,
      date: "شهریور 23",
      img: News5,
    },
    {
      title: "مسی در اوج",
      author: "ادمین",
      views: 140,
      date: "مهر 23",
      img: News3,
    },
    {
      title: "مسی بهترین بازیکن تاریخ",
      author: "ادمین",
      views: 140,
      date: "مهر 23",
      img: News4,
    },
  ];

  return (
    <div className="w-full h-full">
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
        className="flex justiy-end overflow-hidden items-center h-rem20 w-full lg:h-rem26 bg-black"
      >
        <div className="hidden lg:absolute w-96 h-96 bg-yellow-400 absolute transform rotate-45 overflow-hidden -translate-x-64 overflow-hidden -translate-y-8"></div>
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">خبرنامه</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">خبرنامه</p>
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
      <div className="px-5 lg:px-15 items-center h-full w-full flex flex-col">
        <div className="w-full px-2 text-lg items-center text-gray-400 flex justify-end">
          <div className="">
            <button>
              <Link to="/">خانه</Link>
            </button>
          </div>
          <AiOutlineLeft />
          <div className="">
            <button>
              <Link to="/news">اخبار</Link>
            </button>
          </div>
        </div>
        <div className="flex my-4 flex-row-reverse h-full w-full justify-between items-center">
          <h1 className="font-bold text-5xl">اخبار</h1>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button className="bg-gray-900">مرتب سازی</Button>
            </Menu.Target>

            <Menu.Dropdown className="text-right">
              <Menu.Label>بر اساس</Menu.Label>
              <Menu.Item className="text-right" icon={<CaretDown size={14} />}>
                جدید ترین
              </Menu.Item>
              <Menu.Item className="text-right" icon={<CaretUp size={14} />}>
                جدید ترین
              </Menu.Item>
              <Menu.Item className="text-right" icon={<UsersThree size={14} />}>
                پر بازدید ترین
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="flex flex-col lg:px-20 w-full h-full">
          <div className="flex m-3 lg:flex-row-reverse flex-col lg:flex-row justify-center items-center w-full">
            <div className="flex w-full h-full">
              <img className="w-full h-full" src={News2} alt="" />
            </div>
            <div className="flex text-center space-y-2 p-2 flex-col">
              <h1 className="text-xl">کوین بار دیگر در آغوش مرگ.</h1>
              <p className="text-sm">
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="flex hidden lg:flex w-2/3">
              <div className="flex h-14 justify-end border-black border-b-2 w-full">
                <h1 className="w-28 text-center py-3 bg-gray-900 text-gray-100">
                  خبر های کوتاه
                </h1>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
              {news.map((news) => {
                return (
                  <div className="flex flex-col w-full h-full">
                    <div className="flex justify-end">
                      <img src={news.img} alt="" />
                    </div>
                    <div className="flex w-full items-end flex-col">
                      <h1 className="text-xl font-bold py-2">{news.title}</h1>
                      <div className="flex w-full flex-row-reverse justify-between items-center">
                        <div className=" flex items-center space-x-2 p-1">
                          <p className="text-sm text-gray-500">{news.date}</p>
                          <p>{news.author}</p>
                        </div>
                        <div className="flex space-x-2 p1 items-center">
                          <p className="text-lg font-bold">{news.views}</p>
                          <Eye size={32} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
