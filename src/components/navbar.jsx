import { Link } from "react-router-dom";
import { Menu, Button, Text } from "@mantine/core";
import Logo from "../assets/images/logo.png";
import { Dialog, Transition } from "@headlessui/react";
import { BsPhoneFill } from "react-icons/bs";
import { Fragment, useState } from "react";
import {
  List,
  Minus,
  Plus,
  SignIn,
  ShoppingCart,
  User,
  Password,
  MagnifyingGlass,
  Phone,
  UserCircle,
} from "phosphor-react";

import mainPageProjects6 from "../assets/images/mainPageProjects6.webp";
import mainPageProjects7 from "../assets/images/mainPageProjects7.webp";

export default function navbar() {
  let items = [
    { title: "لوله", price: 1000, quantity: 2, image: mainPageProjects7 },
    { title: "سیم", price: 3000, quantity: 1, image: mainPageProjects6 },
  ];

  const [mode, setMode] = useState("login");

  // menu drawer modal controls
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  // shopping drawer controls
  let [isOpen2, setIsOpen2] = useState(false);

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  // login dialog control

  let [isOpen3, setIsOpen3] = useState(false);

  function closeModal3() {
    setIsOpen3(false);
  }

  function openModal3() {
    setIsOpen3(true);
  }

  // signup dialog control

  let [isOpen4, setIsOpen4] = useState(false);

  function closeModal4() {
    setIsOpen4(false);
  }

  function openModal4() {
    setIsOpen4(true);
  }
  return (
    <div className="w-screen fixed flex-col h-24  flex z-50">
      <div className="bg-white shadow-md lg:flex hidden flex-row-reverse  text-white items-center justify-between pl-4 py-4 pr-6 ">
        <div className="flex flex-row-reverse items-center">
          <div className=" w-16 h-16">
            <Link to={"/"}>
              <a href="www.sazandeh.onrender.com/">
                <img src={Logo} alt="" />
              </a>
            </Link>
          </div>
          <div class="pt-2 relative text-black mr-10">
            <button
              type="submit"
              className="absolute flex items-center right-0 top-0 mt-5 mr-4"
            >
              <MagnifyingGlass size={20} weight="bold" />
            </button>

            <input
              className="border-2 placeholder-gray-500 text-right transition ease-in duration-300 text-darkPurple w-textArea hover:bg-white border-gray-300 bg-mainBlue h-10 px-5 pr-4 md:pr-16 rounded-full text-md focus:outline-none"
              type="search"
              name="search"
              placeholder="جستجو"
            />
          </div>
        </div>
        <div className="flex ">
          <div
            onClick={openModal2}
            className="flex hover:bg-gray-900 text-neutral-900 hover:text-white transition px-4 py-3 cursor-pointer transfrom   "
          >
            <ShoppingCart size={32} />
          </div>
          <div
            onClick={openModal3}
            className="flex hover:bg-gray-900 text-neutral-900 hover:text-white transition px-4 py-3 cursor-pointer transfrom   "
          >
            <SignIn size={32} />
          </div>
          <div className="flex hover:bg-gray-900 text-neutral-900 hover:text-white transition px-4 py-3 cursor-pointer transfrom ">
            <Link to="/profile">
              <UserCircle size={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full border-b-2 border-yellow-400 bg-white items-center justify-around h-16">
        <div className="flex justify-start lg:justify-center px-2 w-full lg:w-2/3"></div>
        <div className="flex w-full   h-16 justify-end lg:pr-32 py-8 space-x-12 items-center align-center">
          <div className="flex md:hidden w-full">
            <div
              onClick={openModal2}
              className="flex hover:bg-gray-900 text-neutral-900 hover:text-white transition px-4 py-3 cursor-pointer transfrom   "
            >
              <ShoppingCart size={32} />
            </div>
            <div
              onClick={openModal3}
              className="flex hover:bg-gray-900 text-neutral-900 hover:text-white transition px-4 py-3 cursor-pointer transfrom   "
            >
              <SignIn size={32} />
            </div>
            <div className="flex hover:bg-gray-900 text-neutral-900 hover:text-white transition px-4 py-3 cursor-pointer transfrom ">
              <Link to="/profile">
                <UserCircle size={32} />
              </Link>
            </div>
          </div>
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
            to={"/catalogs"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/catalogs">کاتالوگ</a>
          </Link>
          <Link
            to={"/blogs"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/blog">وبلاگ</a>
          </Link>
          <Link
            to={"/installmentsales"}
            className="hidden lg:flex cursor-pointer duration-300 hover:bg-black hover:text-white w-28 items-center justify-center  py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/installmentSales">خرید اقساطی</a>
          </Link>
          <Link
            to={"/projects"}
            className="hidden lg:block cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com/projects">پروژها</a>
          </Link>
          <Link to={"/shop"}>
            <Menu
              trigger="hover"
              openDelay={100}
              closeDelay={400}
              shadow="md"
              width={200}
            >
              <Menu.Target>
                <Button className="hidden lg:block text-gray-900 font-semibold cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition ">
                  <a href="www.sazandeh.onrender.com/shop">کالا</a>
                </Button>
              </Menu.Target>

              <Menu.Dropdown className="text-right">
                <Menu.Label>بر اساس</Menu.Label>
                <Menu.Item className="text-right">جدید ترین</Menu.Item>
                <Menu.Item className="text-right">جدید ترین</Menu.Item>
                <Menu.Item className="text-right">پر بازدید ترین</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Link>
          <Link to={"/services"}>
            <Menu
              trigger="hover"
              openDelay={100}
              closeDelay={400}
              shadow="md"
              width={200}
            >
              <Menu.Target>
                <Button className="hidden lg:block text-gray-900 font-semibold cursor-pointer duration-300 hover:bg-black hover:text-white px-4 py-3 transition ">
                  <a href="www.sazandeh.onrender.com/services">خدمات</a>
                </Button>
              </Menu.Target>

              <Menu.Dropdown className="text-right">
                <Menu.Label>بر اساس</Menu.Label>
                <Menu.Item className="text-right">جدید ترین</Menu.Item>
                <Menu.Item className="text-right">جدید ترین</Menu.Item>
                <Menu.Item className="text-right">پر بازدید ترین</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Link>
          <Link
            to={"/"}
            className="cursor-pointer hidden lg:block duration-300 hover:bg-black hover:text-white px-4 py-3 transition "
          >
            <a href="www.sazandeh.onrender.com">خانه</a>
          </Link>

          <div className="flex justify-between  w-full items-center ">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md lg:hidden  px-4 py-2 text-sm font-bold text-white text-black"
            >
              <List size={32} />
            </button>
          </div>
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
                      منو چاره جو
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
                        to={"/installmentsales"}
                        className="cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com">خرید اقساطی</a>
                      </Link>
                      <Link
                        to={"/catalog"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/catalog">کاتالوگ</a>
                      </Link>

                      <Link
                        to={"/blogs"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/blog">وبلاگ</a>
                      </Link>

                      <Link
                        to={"/projects"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/projects">پروژها</a>
                      </Link>
                      <Link
                        to={"/shop"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/shop">فروشگاه</a>
                      </Link>
                      <Link
                        to={"/services"}
                        className=" cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com/services">خدمات</a>
                      </Link>
                      <Link
                        to={"/admin"}
                        className="cursor-pointer duration-300 hover:bg-black hover:text-white px-8 py-3 transition "
                      >
                        <a href="www.sazandeh.onrender.com">ادمین</a>
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
        <Transition appear show={isOpen2} as={Fragment}>
          <Dialog
            as="div"
            className="flex h-screen w-full h-screen inset-0 z-10"
            onClose={closeModal2}
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

            <div className="fixed z-50 h-screen inset-0 overflow-y-auto">
              <div className="flex w-10/12 h-screen items-center justify-start text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95 -translate-x-24"
                  enterTo="opacity-100 scale-100 translate-x-0"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95 -translate-x-24"
                >
                  <Dialog.Panel className="w-full h-full text-gray-100 max-w-md transform overflow-hidden pt-32 bg-gray-800 z-80  p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl border-b text-right py-6 font-bold leading-6 text-gray-100"
                    >
                      سبد خرید
                    </Dialog.Title>
                    <div className="flex flex-col border-b w-full space-y-2 h-4/6 mt-2">
                      {items.map((item) => {
                        return (
                          <div className="flex justify-around items-center bg-gray-100 text-gray-900 h-16 w-full">
                            <div className="flex justify-around items-around space-x-2 ">
                              <Plus
                                className="border rounded-full cursor-pointer hover:bg-gray-900 hover:text-gray-50 transition"
                                size={20}
                              />
                              <h3>{item.quantity}</h3>
                              <Minus
                                className="border rounded-full cursor-pointer hover:bg-gray-900 hover:text-gray-50 transition"
                                size={20}
                              />
                            </div>
                            <h2>{item.price}</h2>
                            <h1>{item.title}</h1>
                            <div className="flex">
                              <img
                                className="object-contain w-10 h-10 rounded"
                                src={item.image}
                                alt=""
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex space-y-4 flex-col justify-around items-start mt-4">
                      <div className="flex justify-around rounded-md  items-center bg-gray-100 text-gray-900 shadow-2xl w-36 py-4">
                        <div className="flex">20000</div>
                        <div className="flex ">:مجموع خرید</div>
                      </div>
                      <Link to={"/checkout"}>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                          onClick={closeModal2}
                        >
                          تکمیل خرید
                        </button>
                      </Link>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition appear show={isOpen3} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal3}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full bg-neutral-900 max-w-md transform overflow-hidden rounded-sm p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-right text-gray-100"
                    >
                      {mode === "login" ? (
                        <div>ورود به حساب کاربری</div>
                      ) : mode === "signup" ? (
                        <div>ساخت حساب جدید</div>
                      ) : null}
                    </Dialog.Title>
                    {mode === "login" ? (
                      <div className="flex flex-col justify-center h-full space-y-4 p-4 mt-2">
                        <div className="flex w-full border">
                          <label
                            className="bg-gray-100 flex justify-center items-center p-3"
                            htmlFor="email"
                          >
                            <Phone size={20} weight="bold" />
                          </label>
                          <input
                            onChange={(e) => {
                              setEmailAddress(e.target.value);
                            }}
                            className="w-full   text-right p-2"
                            placeholder="شماره تماس"
                            name="email"
                            type="email"
                          />
                        </div>
                        <div className="flex w-full border">
                          <label
                            className="bg-gray-100 flex justify-center items-center p-3"
                            htmlFor="password"
                          >
                            <Password />
                          </label>
                          <input
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                            }}
                            className="w-full   text-right p-2"
                            placeholder="گذرواژه"
                            name="password"
                            type="password"
                          />
                        </div>
                        <div className="flex my-3 cursor-pointer justify-end items-center text-gray-100">
                          <p>بازیابی گذرواژه؟</p>
                        </div>
                      </div>
                    ) : mode === "signup" ? (
                      <div className="flex flex-col justify-center h-full space-y-4 p-4 mt-2">
                        <div className="flex w-full border">
                          <label
                            className="bg-gray-100 flex justify-center items-center p-3"
                            htmlFor="name"
                          >
                            <Phone size={20} weight="bold" />
                          </label>
                          <input
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full   text-right p-2"
                            placeholder="شماره تماس"
                            name="name"
                            type="text"
                          />
                        </div>

                        <div className="flex w-full border">
                          <label
                            className="bg-gray-100 flex justify-center items-center p-3"
                            htmlFor="password"
                          >
                            <Password />
                          </label>
                          <input
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                            }}
                            className="w-full   text-right p-2"
                            placeholder="گذرواژه"
                            name="password"
                            type="password"
                          />
                        </div>
                      </div>
                    ) : null}

                    <div className="flex space-y-2 flex-col justify-center items-center mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-sm my-5 transition ease-in duration-300   bg-yellow-400 px-12 py-2 text-lg   text-gray-900 hover:bg-black hover:text-white  "
                        onClick={closeModal3}
                      >
                        ورود
                      </button>
                      <button
                        type="button"
                        onClick={() => {}}
                        className="inline-flex justify-center mb-5 rounded-sm transition ease-in duration-300 hover:text-white bg-white hover:bg-black px-4 py-2 text-lg text-neutral-900 "
                      >
                        {mode === "login" ? (
                          <div
                            onClick={() => {
                              setMode("signup");
                            }}
                          >
                            ساخت حساب جدید
                          </div>
                        ) : mode === "signup" ? (
                          <div
                            onClick={() => {
                              setMode("login");
                            }}
                          >
                            بازگشت
                          </div>
                        ) : null}
                      </button>
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
