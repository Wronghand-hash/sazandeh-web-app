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
          backgroundImage: `url(${AboutusImage})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex py-5 justiy-end overflow-hidden items-center h-rem20 w-full lg:h-rem26 bg-black"
      >
        <div className="hidden lg:absolute w-96 h-96 bg-yellow-400 absolute transform rotate-45 overflow-hidden -translate-x-64 overflow-hidden -translate-y-8"></div>
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">وبلاگ</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">وبلاگ</p>
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
      <div className="flex items-center w-screen flex-col lg:px-16">
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
                <Link to="/blogs">وبلاگ</Link>
              </button>
            </div>
            <AiOutlineLeft />
            <div className="">
              <button>
                <Link to="/blogs">مسی بهترین بازیکن دنیا</Link>
              </button>
            </div>
          </div>
          <div className="flex p-4 w-full  flex-col">
            <div className="flex justify-end w-full">
              <h1 className="font-bold text-5xl">تعمیرات تخصصی خانه</h1>
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
              <img className="lg:w-1/2 lg:h-4/6" src={AboutusImage} alt="" />
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
              <div className="flex flex-col lg:flex-row lg:space-y-0 space-x-0 space-y-4 border-b border-b-gray-800 py-5 w-full px-2 lg:justify-around lg:space-x-4">
                <div className="flex space-x-2 p-2 bg-gray-100 rounded shadow-2xl w-96">
                  <div className="flex flex-col text-right">
                    <h1 className="font-bold">تخریب خانه های هند</h1>
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
                    <h1 className="font-bold">خانه اسباب بازی ها</h1>
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
                    <h1 className="font-bold">رانگامیزی هنرمندانه</h1>
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
              <div className="flex flex-col">
                <div className="flex p-5 justify-end w-full ">
                  <h1>نظرات</h1>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 flex my-4 px-5">
                  <div className="flex  space-y-8 flex-col">
                    <p className="text-sm">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای م
                    </p>
                    <div className="flex border-t-4 py-1 justify-start space-x-8">
                      <div className="w-14 h-14 bg-yellow-500"></div>
                      <div className="flex flex-col">
                        <p>آقای فلانی</p>
                        <p>مدیر عامل آداک فناوری</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  space-y-8 flex-col">
                    <p className="text-sm">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      خلاقی، و فرهنگ پیام
                    </p>
                    <div className="flex border-t-4 py-1 justify-start space-x-8">
                      <div className="w-14 h-14 bg-yellow-500"></div>
                      <div className="flex flex-col">
                        <p>آقای فلانی</p>
                        <p>مدیر عامل آداک فناوری</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  space-y-8 flex-col">
                    <p className="text-sm">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      اخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                      شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                      خلاقی، و فرهنگ پیام
                    </p>
                    <div className="flex border-t-4 py-1 justify-start space-x-8">
                      <div className="w-14 h-14 bg-yellow-500"></div>
                      <div className="flex flex-col">
                        <p>آقای فلانی</p>
                        <p>مدیر عامل آداک فناوری</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full px-5">
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
            <div className="flex p-5 bg-gray-200  flex-col w-full">
              <div className="flex p-5 w-full justify-end border-t border-gray-800">
                <h1>دیدگاه شما</h1>
              </div>
              <div className="flex justify-center items-center flex-col w-full">
                <div className="flex w-full p-5 justify-center items-center">
                  <textarea
                    className="text-right rounded w-full p-5"
                    placeholder="دیدگاه خود راه وارد کنی"
                    name=""
                    id=""
                    cols="50"
                    rows="10"
                  ></textarea>
                </div>
                <div className="flex lg:flex-row space-y-2 flex-col justify-around items-center  w-full">
                  <div className="flex justify-center items-center  space-x-2 w-full">
                    <input className="py-5 px-8 rounded text-right" placeholder="... نام خود را وارد کنید" type="text" name="name" />
                    <label htmlFor="name">:نام کاربری</label>
                  </div>
                  <div className="flex justify-center items-center space-x-2  w-full">
                    <input className="py-5 px-8 rounded text-right" placeholder="... ایمیل خود را وارد کنید" type="email" name="email" />
                    <label htmlFor="email">:ایمیل</label>
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
