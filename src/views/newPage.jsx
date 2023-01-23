import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../components/navbar";
import AboutusImage from "../assets/images/aboutusImage.webp";
import { Link } from "react-router-dom";
import {
  CaretDown,
  CaretUp,
  CaretLeft,
  CaretRight,
  Quotes,
  UsersThree,
  Eye,
} from "phosphor-react";
import { Menu, Button, Text } from "@mantine/core";
import News1 from "../assets/images/news1.webp";
import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
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

  let shortNews = [
    {
      title: "مسی بهترین بازیکن تاریخ",
      author: "ادمین",
      views: 140,
      date: "مهر 23",
      img: News1,
    },
    {
      title: "مسی بهترین بازیکن تاریخ",
      author: "ادمین",
      views: 140,
      date: "مهر 23",
      img: News1,
    },
    {
      title: "مسی بهترین بازیکن تاریخ",
      author: "ادمین",
      views: 140,
      date: "مهر 23",
      img: News1,
    },
    {
      title: "مسی بهترین بازیکن تاریخ",
      author: "ادمین",
      views: 140,
      date: "مهر 23",
      img: News1,
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
      <div className=" lg:px-15 items-center h-full w-full flex flex-col">
        <div className="w-full p-5 px-2 text-lg items-center text-gray-400 flex justify-end">
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
        <div className="flex border-b-4 border-gray-900 my-4 flex-row-reverse h-full w-full justify-center items-center">
          <h1 className="font-bold bg-gray-900 p-5 text-white border-black text-5xl">
            آخرین اخبار
          </h1>
        </div>
        <div className="flex flex-col lg:px-20 w-full h-full">
          <div className="flex m-3 lg:flex-row-reverse flex-col lg:flex-row justify-center items-center w-full">
            <div className="flex w-full h-full">
              <img className="w-full h-full" src={News2} alt="" />
            </div>
            <div className="flex  h-full text-right space-y-2 p-2 flex-col">
              <h1 className="text-7xl">کوین بار دیگر در آغوش مرگ</h1>
              <p className="text-sm">
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              </p>
            </div>
          </div>
          <div className="flex my-2 border-b-2 border-gray-900 w-full justify-end">
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button className="bg-gray-900">مرتب سازی</Button>
              </Menu.Target>

              <Menu.Dropdown className="text-right">
                <Menu.Label>بر اساس</Menu.Label>
                <Menu.Item
                  className="text-right"
                  icon={<CaretDown size={14} />}
                >
                  جدید ترین
                </Menu.Item>
                <Menu.Item className="text-right" icon={<CaretUp size={14} />}>
                  جدید ترین
                </Menu.Item>
                <Menu.Item
                  className="text-right"
                  icon={<UsersThree size={14} />}
                >
                  پر بازدید ترین
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <div className="flex space-x-2">
            <div className="flex flex-col hidden lg:flex w-2/3">
              <div className="flex cursor-pointer   h-14 justify-end border-black border-b-2 w-full">
                <h1 className="w-28 text-center hover:bg-yellow-400 transition hover:text-gray-900 py-3 bg-gray-900 text-gray-100">
                  خبر های کوتاه
                </h1>
              </div>
              <div className="flex space-y-5 my-3 flex-col">
                {shortNews.map((news) => {
                  return (
                    <div className="flex cursor-pointer transition hover:bg-gray-200 flex-row-reverse rounded shadow-xl w-full h-24 bg-gray-100">
                      <div className="flex w-2/3 justify-end">
                        <img src={news.img} alt="" />
                      </div>
                      <div className="flex w-full items-center justify-end  flex-row-reverse p-5">
                        <div className="flex w-full text-right justify-end flex-col">
                          <h1>{news.title}</h1>
                          <p>{news.date}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <Eye size={15} />
                          <p className="text-sm">{news.views}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex cursor-pointer   h-14 justify-end border-black border-b-2 w-full">
                  <h1 className="w-28 text-center hover:bg-yellow-400 transition hover:text-gray-900 py-3 bg-gray-900 text-gray-100">
                    وبسایت ما
                  </h1>
                </div>
                <Link to="/blogs">
                  <div className="h-full   flex items-center flex-col w-full ">
                    <div className="flex flex-col items-center my-5">
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
                    <div className="px-8 my-4 flex space-y-2 text-right items-end flex-col">
                      <h1 className="font-bold text-lg">
                        بازسازی منزل شما تنها در 2 هفته
                      </h1>
                      <h5 className="text-sm">
                        لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </h5>
                    </div>
                  </div>
                </Link>
                <div className="h-full w-screen lg:px-0 px-8 lg:w-textArea  text-right">
                  <div
                    className="flex flex-col items-center my-5
          "
                  >
                    <h3 className="py-2 text-md px-1 bg-yellow-400 text-neutral-900">
                      CLIENTS
                    </h3>
                    <h1 className="text-xl my-2 font-bold">
                      نظرات مشتریان ما{" "}
                    </h1>
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
                    <Quotes
                      className="text-gray-300"
                      size={120}
                      weight="fill"
                    />
                  </div>
                  <h1>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد.
                  </h1>
                  <div className="flex my-6 border-t-4 py-1 justify-start items-center space-x-8">
                    <div className="w-20 h-20 bg-neutral-900"></div>
                    <div className="flex flex-col">
                      <p>آقای فلانی</p>
                      <p>مدیر عامل آداک فناوری</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col my-4 space-y-4 w-full">
              {news.map((news) => {
                return (
                  <Link to="/newsitem">
                    <div className="flex cursor-pointer hover:bg-gray-100 transition flex-col w-full h-full">
                      <div className="flex justify-end">
                        <img src={news.img} alt="" />
                      </div>
                      <div className="flex p-4 w-full items-end flex-col">
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
                  </Link>
                );
              })}
              <div className="flex-w-full justify-start">
                <button className="w-40 py-4 text-lg bg-gray-900 hover:bg-yellow-400 hover:text-gray-900 transition text-gray-100">
                  اخبار بیشتر
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
