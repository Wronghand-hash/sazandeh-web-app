import {
  FileX,
  SortAscending,
  SortDescending,
  Trash,
  Upload,
  PlusCircle,
} from "phosphor-react";
import oneproduct from "../assets/images/productImages/oneproduct.webp";
import twoproduct from "../assets/images/productImages/twoproduct.webp";
import threeproduct from "../assets/images/productImages/threeproduct.webp";
import fourproduct from "../assets/images/productImages/fourproduct.webp";
import fiveproduct from "../assets/images/productImages/fiveproduct.webp";
import sixproduct from "../assets/images/productImages/sixproduct.webp";
import sevenproduct from "../assets/images/productImages/sevenproduct.webp";
import eightproduct from "../assets/images/productImages/eightproduct.webp";
import nineproduct from "../assets/images/productImages/nineproduct.webp";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ProductModal from "./productModal";
export default function shopManagement() {
  const [ascention, setAscention] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  let products = [
    { title: "لوله", price: 232333, image: oneproduct },
    { title: "شیسب", price: 232333, image: twoproduct },
    { title: "لویییرم", price: 232333, image: threeproduct },
    { title: "لوشسیبرم", price: 232333, image: fourproduct },
    { title: "لورم", price: 232333, image: fiveproduct },
    { title: "لورم", price: 232333, image: sixproduct },
    { title: "لیببورم", price: 232333, image: sevenproduct },
    { title: "لورم", price: 232333, image: eightproduct },
    { title: "شیسب", price: 232333, image: nineproduct },
  ];
  return (
    <div className="flex lg:px-5 justify-center  w-screen overflow-x-hidden h-full">
      <div className="flex w-full flex-col h-full  justify-center items-center">
        <div className="flex w-full font-bold justify-center py-5">
          مدیریت کالاها
        </div>

        <div className="flex space-y-6 justify-center items-center flex-col w-full">
          <div className="flex items-center w-11/12 w-full justify-end h-10 bg-gray-400">
            {ascention ? (
              <SortAscending
                onClick={() => {
                  setAscention(false);
                }}
                size={30}
              />
            ) : (
              <SortDescending
                onClick={() => {
                  setAscention(true);
                }}
                size={30}
              />
            )}
          </div>
          <div className="flex bg-white p-5  w-10/12 justify-center items-center space-y-3 flex-col">
            {products.map((product, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-row-reverse hover:bg-sky-300 transition w-full h-16 shadow-2xl rounded-2xl justify-around items-center w-full bg-gray-100 border-b-2 border-gray-900"
                >
                  <div>
                    <img
                      className="object-contain w-10 h-10"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div> {product.title}</div>
                  <div className="hidden lg:flex">{product.price}</div>
                  <div className="flex space-x-2 w-24 mx-4 lg:mx-0">
                    <ProductModal product={product} />
                    <div className="bg-red-400 py-2 hover:bg-red-500 px-4 rounded shadow-xl">
                      <Trash className=" text-white" size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" fixed cursor-pointer bottom-5 right-5">
          <div
            onClick={openModal}
            className="flex bg-yellow-500 rounded-full justify-center items-center"
          >
            <PlusCircle
              className="w-14 h-14 justify-self-center text-blueGray-900 bg-blueGray-900 rounded-full"
              size={42}
            />
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold text-center py-5 font-medium leading-6 text-gray-50"
                    >
                      محصول جدید
                    </Dialog.Title>
                    <div className="w-full space-y-4 flex-col h-full flex">
                      <div className="flex justify-center items-center w-full">
                        <button className="px-6 py-2 flex flex-col shadow-2xl hover:bg-yellow-500 hover:text-gray-900 font-bold bg-black justify-center items-center text-white  hover:border-b-6 transition-all border-yellow-500">
                          <Upload size={40} />
                          <p>بارگذاری تصویر</p>
                        </button>
                      </div>
                      <div className="flex w-full border">
                        <input
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full   text-right p-2"
                          placeholder=".... عنوان"
                          name="name"
                          type="text"
                        />
                        <label
                          className="font-bold bg-gray-100 w-1/2 flex justify-center items-center p-3"
                          htmlFor="name"
                        >
                          عنوان
                        </label>
                      </div>
                      <div className="flex w-full border">
                        <input
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full   text-right p-2"
                          placeholder="..... قیمت"
                          name="price"
                          type="number"
                        />
                        <label
                          className="font-bold bg-gray-100 w-1/2 flex justify-center items-center p-3"
                          htmlFor="name"
                        >
                          قیمت
                        </label>
                      </div>
                      <div className="flex w-full border">
                        <textarea
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full   text-right p-2"
                          placeholder="...."
                          name="name"
                          type="text"
                        />
                        <label
                          className="font-bold bg-gray-100 w-1/2 flex justify-center items-center p-3"
                          htmlFor="name"
                        >
                          جزئیات بیشتر
                        </label>
                      </div>
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
