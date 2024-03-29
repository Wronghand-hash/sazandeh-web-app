import {
  MapPin,
  EnvelopeSimple,
  PhoneOutgoing,
  CaretLeft,
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  TwitterLogo,
} from "phosphor-react";
import logo from "../assets/images/logo.webp";
export default function Footer() {
  return (
    <div className="w-screen overflow-x-hidden h-auto items-center space-y-14 lg:space-y-0 bg-neutral-800   flex flex-col  justify-center  ">
      <div className="flex-col-reverse flex lg:flex-row-reverse lg:px-14 w-full justify-center">
        <div className=" lg:w-96 w-full h-full flex flex-col space-y-4 items-end lg:border-t-0 border-t border-rose-50 justify-center lg:px-0 px-6 my-5">
          <h1 className="text-white font-semibold text-lg mt-5">
            با ما در ارتباط باشید
          </h1>
          <h2 className="text-md transition text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer text-neutral-500 space-x-3 flex justify-center">
            <MapPin size={20} weight="fill" />
            <span>
              لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
          </h2>
          <h2 className="text-md transition ease-in duration-200 hover:text-yellow-400 cursor-pointer text-neutral-500 space-x-3 flex justify-center">
            <EnvelopeSimple size={20} weight="fill" />
            <span>info@sazandeh.com</span>
          </h2>
          <h2 className="text-md transition ease-in duration-200 hover:text-yellow-400 cursor-pointer text-neutral-500 space-x-3 flex justify-center">
            <PhoneOutgoing size={20} weight="fill" /> <span>123-456-1345 </span>
          </h2>
        </div>
        <div className=" lg:w-96 w-full h-full flex flex-col space-y-9 lg:border-t-0 border-t border-rose-50 items-center justify-center lg:px-0 px-6 my-5">
          <h1 className="text-white font-semibold text-lg mt-4">
            دسترسی های سریع
          </h1>
          <div className="flex flex-col items-end space-y-3 justify-start">
            <div className="flex items-center space-x-4">
              <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
                <CaretLeft size={13} weight="light" />
                صفحه ی اصلی
              </h1>
              <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
                <CaretLeft size={13} weight="light" />
                ارتباط با ما
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
                <CaretLeft size={13} weight="light" />
                درباره ی ما
              </h1>
              <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
                <CaretLeft size={13} weight="light" />
                قوانین و مقررات
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
                <CaretLeft size={13} weight="light" />
                محصولات
              </h1>
              <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
                <CaretLeft size={13} weight="light" />
                خدمات مشاوره
              </h1>
            </div>
            <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
              <CaretLeft size={13} weight="light" />
              وبلاگ چاره جو
            </h1>
          </div>
        </div>
        <div className=" lg:w-96 w-full h-full flex flex-col space-y-3 items-center justify-center lg:px-0 px-6 my-5">
          <img className="h-36 object-contain" src={logo} alt="" />
          <h2 className="text-sm font-light text-right text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </h2>
          <h1 className="text text-neutral-500">
            شنبه تا پنجشنبه - <span className="text-white">9 الی 21</span>
          </h1>
          <h1 className="text text-neutral-500">
            جمعه ها - <span className="text-white">تعطیل</span>
          </h1>
        </div>
        <div className="h-96 w-96 transform rotate-45 -translate-x-72 bg-yellow-400 lg:flex hidden"></div>
      </div>
      <div className="h-14 w-full  flex items-center justify-around border-t px-4 border-rose-50">
        <div>
          <h1 className="font-light text-white">
            COPYRIGHT 2022. ALL RIGHTS RESERVED.
          </h1>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <InstagramLogo
            className="cursor-pointer transition ease-in duration-300 hover:text-yellow-400"
            size={40}
            weight="thin"
          />
          <LinkedinLogo
            className="cursor-pointer transition ease-in duration-300 hover:text-yellow-400"
            size={40}
            weight="thin"
          />
          <FacebookLogo
            className="cursor-pointer transition ease-in duration-300 hover:text-yellow-400"
            size={40}
            weight="fill"
          />
          <TwitterLogo
            className="cursor-pointer transition ease-in duration-300 hover:text-yellow-400"
            size={40}
            weight="fill"
          />
        </div>
      </div>
    </div>
  );
}
