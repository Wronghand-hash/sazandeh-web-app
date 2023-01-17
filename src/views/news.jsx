import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../components/navbar";
import AboutusImage from "../assets/images/aboutusImage.webp";
import { Link } from "react-router-dom";
import News5 from "../assets/images/news4.webp";
import {
  ChatCentered,
  Eye,
  TelegramLogo,
  WhatsappLogo,
  InstagramLogo,
  TwitterLogo,
  FacebookLogo,
} from "phosphor-react";
import Footer from "../components/footer";

export default function news() {
  return (
    <div className="w-full h-full bg-gray-300">
      <Navbar />
      <div
        style={{
          background:
            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
          backgroundImage: `url(${News5})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex py-5 justiy-end overflow-hidden items-center h-rem20 w-full lg:h-rem26 bg-black"
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
      <div className="flex items-center w-screen flex-col px-16">
        <div className="flex py-5 bg-gray-50 w-full items-center flex-col">
          <div className="w-full flex-row-reverse my-4 px-2 text-lg items-center text-gray-400 flex justify-start">
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
            <AiOutlineLeft />
            <div className="">
              <button>
                <Link to="/news">مسی بهترین بازیکن دنیا</Link>
              </button>
            </div>
          </div>
          <div className="flex p-4 w-full  flex-col">
            <div className="flex justify-end w-full">
              <h1 className="font-bold text-5xl">مسی بهترین بازیکن تاریخ</h1>
            </div>
            <div className="flex space-y-4 flex-col items-end p-4 w-full justify-end ">
              <div className="flex space-x-2 items-center w-full justify-end">
                <div className="flex items-center">
                  <p>23 دی</p>
                </div>
                <div className="flex items-center">
                  <p>--</p>
                </div>
                <div className="flex items-center">
                  <p>ادمین</p>
                  <p>توسط</p>
                </div>
              </div>
              <div className="flex justify-end space-x-4 w-full">
                <div className="flex flex-col justify-center items-center bg-gray-900 text-gray-100 p-3">
                  <p>23</p>
                  <Eye />
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-900 text-gray-100 p-3">
                  <p>23</p>
                  <ChatCentered />
                </div>
              </div>
              <div className="flex justify-end items-center space-x-2 w-full">
                <TelegramLogo
                  className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                  size={50}
                />
                <WhatsappLogo
                  className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                  size={50}
                />
                <InstagramLogo
                  className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                  size={50}
                />
                <TwitterLogo
                  className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                  size={50}
                />
                <FacebookLogo
                  className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                  size={50}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col w-full h-full">
            <div className="flex w-full justify-center">
              <img className="w-1/2 h-4/6" src={News5} alt="" />
            </div>
            <div className="flex justify-center p-20 border-b border-gray-900 text-right">
              <p>
                ا استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                پیاما استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                افزارها شناخت بیشتری را برای طراحاعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیاما استفاده
                از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال وعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیاما استفاده
                از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                زیادی در شصت و سه درصد گذشته حال ون رایانه ای علی الخصوص طراحان
                خلاقی، و فرهنگ پیام
              </p>
            </div>
            <div className="flex space-y-4 flex-col">
              <div className="flex w-full p-5 justify-end">
                <h1>اخرین مطالب نویسنده</h1>
              </div>
              <div className="flex w-full justify-around space-x-4">
                <div className="flex space-x-2 p-2 bg-gray-100 rounded shadow-2xl w-96">
                  <div className="flex flex-col text-right">
                    <h1>مارادونا باردیگر</h1>
                    <p>
                      ربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                      آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                      افز
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex w-24 h-24 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex space-x-2 p-2 bg-gray-100 rounded shadow-2xl w-96">
                  <div className="flex flex-col text-right">
                    <h1>مارادونا باردیگر</h1>
                    <p>
                      ربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                      آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                      افز
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex w-24 h-24 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex space-x-2 p-2 bg-gray-100 rounded shadow-2xl w-96">
                  <div className="flex flex-col text-right">
                    <h1>مارادونا باردیگر</h1>
                    <p>
                      ربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                      آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                      افز
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex w-24 h-24 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex justify-end items-center space-x-2 w-full">
                  <TelegramLogo
                    className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                    size={50}
                  />
                  <WhatsappLogo
                    className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                    size={50}
                  />
                  <InstagramLogo
                    className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                    size={50}
                  />
                  <TwitterLogo
                    className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                    size={50}
                  />
                  <FacebookLogo
                    className="rounded-full hover:bg-gray-900 hover:text-gray-100 p-2 transition border border-gray-800"
                    size={50}
                  />
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
