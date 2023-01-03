import Navbar from "../components/navbar";
import blogsImage from "../assets/images/blogsImage.jpg";
import { AiOutlineLeft, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProfilePicture from "../assets/images/profilePicture.webp";
import { useState } from "react";
import { AddressBook } from "phosphor-react";
import Footer from "../components/footer";

export default function Profile() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");

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
    <div className="h-full w-screen">
      <Navbar></Navbar>
      <div className="h-full w-screen">
        <div
          style={{
            backgroundImage: `url(${blogsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex justiy-end overflow-hidden items-center w-full h-rem26 bg-black"
        >
          <div className="hidden lg:block w-96 h-96 bg-yellow-400 absolute transform rotate-45 -translate-x-64 overflow-hidden -translate-y-8"></div>
          <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
            <p className="text-white text-center mx-8 font-bold text-5xl">
              حساب کاربری
            </p>
            <div className="flex text-white p-2 items-end space-x-3 flex-row">
              <p className="text-yellow-500 font-bold">تماس با ما</p>
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
        <div className="h-full pb-8 w-screen bg-gray-300 flex flex-col items-center justify-center">
          <img src={ProfilePicture} alt="" />
          <button className="px-12 bg-black text-white border-l-4 my-4 border-yellow-400 rounded-sm py-1">
            تغییر عکس کاربری
          </button>
          <h1 className="py-3 my-5 text-4xl font-bold border-b-8 border-yellow-400 text-black">
            تغییر اطلاعات کاربری
          </h1>
          <div className=" w-96 flex flex-col items-center justify-center space-y-7  ">
            <label
              className="bg-gray-100 flex justify-center items-center p-3"
              htmlFor="name"
            >
              <AiOutlineUser />
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              className="w-full   text-right p-2"
              placeholder="نام و نام خانوادگی"
              name="name"
              type="text"
            />
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
              className="w-full   text-right p-2"
              placeholder="آدرس ایمیل"
              name="email"
              type="email"
            />
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
              className="w-full   text-right p-2"
              placeholder="شماره تماس"
              name="phoneNumber"
              type="number"
            />
            <label
              className="bg-gray-100 flex justify-center items-center p-3"
              htmlFor="phoneNumber"
            >
              <AddressBook size={20} />
            </label>
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="w-full   text-right p-2"
              placeholder="آدرس"
              name="address"
              type="text"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
