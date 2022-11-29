import { AiOutlineLeft, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import Navbar from "../components/navbar";
import { BiMessageAltEdit } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
export default function contactUs() {
  return (
    <div className="w-full">
      <Navbar />
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
      <div className="flex p-20 justify-center">
        <div className="w-2/3 space-y-4 h-full flex flex-col">
          <div className="flex py-5 p-2 border-b-2 justify-end items-center">
            <p className="text-2xl font-bold">
              اگر سوالی دارید یا به مشاوره نیاز دارید، از اینجا اقدام کنید
            </p>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col">
              <div className="flex space-x-5  my-2">
                <div className="flex border">
                  <label
                    className="bg-gray-100 flex justify-center items-center p-3"
                    htmlFor="name"
                  >
                    <AiOutlineUser />
                  </label>
                  <input
                    className="text-right p-2"
                    placeholder="نام و نام خانوادگی"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="flex border">
                  <label
                    className="bg-gray-100 flex justify-center items-center p-3"
                    htmlFor="email"
                  >
                    <AiOutlineMail />
                  </label>
                  <input
                    className="text-right p-2"
                    placeholder="آدرس ایمیل"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="flex border">
                  <label
                    className="bg-gray-100 flex justify-center items-center p-3"
                    htmlFor="phoneNumber"
                  >
                    <BsPhoneFill />
                  </label>
                  <input
                    className="text-right p-2"
                    placeholder="شماره تماس"
                    name="phoneNumber"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex w-full ">
                <textarea
                  placeholder="پیام شما"
                  className="w-full px-3 text-right border"
                  name="content"
                  id=""
                  cols=""
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
