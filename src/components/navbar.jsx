import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { List } from "phosphor-react";

export default function navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-screen fixed flex-col h-24 bg-black flex z-50">
      <div className="bg-transparent hidden lg:flex text-white flex justify-end pr-52 p-4 space-x-8">
        <div className="flex space-x-2 justity-between items-center">
          <AiOutlineClockCircle />
          <p>شنبه تا پنج شنبه 12 الی 11</p>
        </div>
        <div className="flex space-x-2 justify-between items-center">
          <AiOutlineMail></AiOutlineMail>
          <p>info@sazandeh.com</p>
        </div>
        <div className="flex space-x-2 justify-between items-center">
          <AiOutlinePhone />
          <p>123-231-2422</p>
        </div>
      </div>
      <div className="flex border-b-2 border-yellow-400 bg-white items-center justify-around h-16">
        <div className="flex justify-start lg:justify-center px-2 w-2/3">
          <div className=" w-12 h-12">
            <Link to={"/"}>
              <a href="www.sazandeh.onrender.com/">
                <img src={Logo} alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex w-full   h-16 justify-end lg:pr-32 py-8 space-x-12 items-center align-center">
          <Link
            to={"/aboutus"}
            className="hidden text-sm lg:block cursor-pointer duration-300 hover:bg-black border-black transition-all px-4 py-2 hover:text-white"
          >
            <a href="www.sazandeh.onrender.com/aboutus">درباره</a>
          </Link>
          <Link
            to={"/contactus"}
            className="hidden text-sm lg:block cursor-pointer duration-300   hover:bg-black hover:text-white  px-4 py-2 transition"
          >
            <a href="www.sazandeh.onrender.com/contactus"> تماس</a>
          </Link>
          <Link
            to={"/shop"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/shop">کاتالوگ</a>
          </Link>
          <Link
            to={"/blogs"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/blog">وبلاگ</a>
          </Link>
          <Link
            to={"/installmentsales"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white w-20 flex  py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/installmentSales">خریداقساطی</a>
          </Link>
          <Link
            to={"/projects"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/projects">پروژها</a>
          </Link>
          <Link
            to={"/shop"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/shop">کالا</a>
          </Link>
          <Link
            to={"/services"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/services">خدمات</a>
          </Link>
          <Link
            to={"/"}
            className="cursor-pointer hidden lg:block duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com">خانه</a>
          </Link>
          <button
            type="button"
            onClick={openModal}
            className="rounded-md lg:hidden  px-4 py-2 text-sm font-bold text-white text-black"
          >
            <List size={32} />
          </button>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="lg:hidden w-full h-full z-20"
            onClose={closeModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="sticky inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full  items-center justify-end text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform translate-x-24"
                  enterTo="opacity-100 translate-x-0"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100 translate-x-0"
                  leaveTo="opacity-0 scale-95 translate-x-24"
                >
                  <Dialog.Panel className="w-full z-50 left-0  max-w-xs transform overflow-hidden h-screen bg-gray-900 text-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      منو سازنده
                    </Dialog.Title>

                    <div className="flex flex-col-reverse text-right mt-24">
                      <Link
                        to={"/aboutus"}
                        className="hidden text-sm lg:block cursor-pointer duration-300 hover:bg-black border-black transition-all px-8 py-2 hover:text-white"
                      >
                        <a href="www.sazandeh.onrender.com/aboutus">درباره</a>
                      </Link>
                      <Link
                        to={"/contactus"}
                        className=" text-sm lg:block cursor-pointer duration-300   hover:bg-black hover:text-white  px-8 py-2 transition"
                      >
                        <a href="www.sazandeh.onrender.com/contactus"> تماس</a>
                      </Link>
                      <Link
                        to={"/shop"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/shop">فروشگاه</a>
                      </Link>
                      <Link
                        to={"/blogs"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/blog">وبلاگ</a>
                      </Link>
                      <Link
                        to={"/services"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/services">خدمات</a>
                      </Link>
                      <Link
                        to={"/projects"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/projects">پروژها</a>
                      </Link>
                      <Link
                        to={"/"}
                        className="cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com">خانه</a>
                      </Link>
                      <h2 className="text-2xl font-bold">منو</h2>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
