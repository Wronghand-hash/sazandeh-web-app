import { AiOutlineLeft, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import Navbar from "../components/navbar";
import { BiMessageAltEdit } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
import googlemapImage from "../assets/images/GoogleMapTA.webp";
import { PhoneIncoming } from "phosphor-react";
import { useState } from "react";

export default function contactUs() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    let review = {
      fullName,
      emailAddress,
      phoneNumber,
      content,
    };
    alert(" message sent");
    console.log(review);
  };

  return (
    <div className="w-screen relative overflow-x-hidden overflow-y-auto">
      <Navbar className="" />
      <div className="hidden lg:absolute w-96 h-96 bg-yellow-400 absolute transform rotate-45 -translate-x-64 -translate-y-8"></div>
      <div className="flex justiy-end items-center w-full h-96 bg-black">
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">تماس با ما</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">تماس با ما</p>
            <AiOutlineLeft />
            <p>خانه</p>
          </div>
        </div>
      </div>

      <div className="flex  lg:p-20 justify-center bg-white">
        <div className="w-2/3 space-y-4 h-full flex flex-col">
          <div className="flex py-5 p-2 border-b-2 justify-end items-center">
            <p className="text-2xl font-bold">
              اگر سوالی دارید یا به مشاوره نیاز دارید، از اینجا اقدام کنید
            </p>
          </div>
          <div className="flex justify-around">
            <div className="flex w-full space-y-5 flex-col">
              <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between w-full md:space-x-5  my-2">
                <div className="flex w-full border">
                  <label
                    className="bg-gray-100 flex justify-center items-center p-3"
                    htmlFor="name"
                  >
                    <AiOutlineUser />
                  </label>
                  <input
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full font-bold text-right p-2"
                    placeholder="نام و نام خانوادگی"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="flex w-full border">
                  <label
                    className="bg-gray-100 flex justify-center items-center p-3"
                    htmlFor="email"
                  >
                    <AiOutlineMail />
                  </label>
                  <input
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                    }}
                    className="w-full font-bold text-right p-2"
                    placeholder="آدرس ایمیل"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="flex w-full border">
                  <label
                    className="bg-gray-100 flex justify-center items-center p-3"
                    htmlFor="phoneNumber"
                  >
                    <BsPhoneFill />
                  </label>
                  <input
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    className="w-full font-bold text-right p-2"
                    placeholder="شماره تماس"
                    name="phoneNumber"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex w-full ">
                <textarea
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  placeholder="پیام شما"
                  className="w-full px-3 text-right border"
                  name="content"
                  id=""
                  cols=""
                  rows="5"
                ></textarea>
              </div>
              <div className="flex-w-full justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 font-bold bg-black text-white  hover:border-b-6 transition-all border-yellow-500"
                >
                  ارسال
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center h-72 my-52 w-full justify-around">
            <button className="flex shadow-xl transition w-56 justify-around border h-20 hover:bg-yellow-400 items-center">
              <PhoneIncoming size={32} />
              <div className="flex items-center justify-center flex-col">
                <p>تماس با ما</p> <p>123-542-8695</p>
              </div>
            </button>
            <button className="flex shadow-xl transition w-56 justify-around border h-20 hover:bg-yellow-400 items-center">
              <PhoneIncoming size={32} />
              <div className="flex items-center justify-center flex-col">
                <p>ارتباط با ما</p> <p>info@sazandeh.com</p>
              </div>
            </button>
            <button className="flex shadow-xl transition w-56 justify-around border h-20 hover:bg-yellow-400 items-center">
              <PhoneIncoming size={32} />
              <div className="flex items-center justify-center flex-col">
                <p>اگر سوالی دارید</p> <p>برایمان پیام بگذارید</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${googlemapImage})` }}
        className="h-96 w-full"
      ></div>
      <div className="w-full flex flex-col h-carousel lg:h-dialog bg-gray-300">
        <div className="flex h-32 p-5 justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h2 className="px-6 text-white bg-blue-500">clients</h2>
            <h2>نظرات مشتریان</h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:p-32 p-5 space-x-0 lg:space-x-8 w-full">
          <div className="flex  space-y-8 flex-col">
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیام
            </p>
            <div className="flex border-t-4 py-1 justify-start space-x-8">
              <div className="w-14 h-14 bg-yellow-500"></div>
              <div className="flex flex-col">
                <p>آقای فلانی</p>
                <p>مدیر عامل آداک فناوری</p>
              </div>
            </div>
          </div>
          <div className="flex hidden lg:block space-y-8 flex-col">
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیام
            </p>
            <div className="flex border-t-4 py-1 justify-start space-x-8">
              <div className="w-14 h-14 bg-yellow-500"></div>
              <div className="flex flex-col">
                <p>آقای فلانی</p>
                <p>مدیر عامل آداک فناوری</p>
              </div>
            </div>
          </div>
          <div className="flex lg:space-y-8 flex-col">
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیام
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
    </div>
  );
}
