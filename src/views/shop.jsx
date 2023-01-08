import Navbar from "../components/navbar";
import Footer from "../components/footer";
import oneproduct from "../assets/images/productImages/oneproduct.webp";
import twoproduct from "../assets/images/productImages/twoproduct.webp";
import threeproduct from "../assets/images/productImages/threeproduct.webp";
import fourproduct from "../assets/images/productImages/fourproduct.webp";
import fiveproduct from "../assets/images/productImages/fiveproduct.webp";
import sixproduct from "../assets/images/productImages/sixproduct.webp";
import sevenproduct from "../assets/images/productImages/sevenproduct.webp";
import eightproduct from "../assets/images/productImages/eightproduct.webp";
import nineproduct from "../assets/images/productImages/nineproduct.webp";
import { Fragment, useState } from "react";
import {
  ArrowFatRight,
  ArrowFatLeft,
  MagnifyingGlass,
  DotsThreeOutlineVertical,
  PlusCircle,
} from "phosphor-react";

import { Dialog, Transition } from "@headlessui/react";

export default function shopPage() {
  // باز و بسته کردن فیلتر های گوشی

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [page, setPage] = useState(1);

  // محل دریافت محصولات

  const [products, setProducts] = useState([
    oneproduct,
    twoproduct,
    threeproduct,
    fourproduct,
    fiveproduct,
    sixproduct,
    sevenproduct,
    eightproduct,
    nineproduct,
  ]);

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex pt-20 lg:pt-52 w-full h-full justify-center ">
        <div className="lg:w-9/12 w-full h-full  flex">
          <div className="flex h-full flex-col w-full ">
            <div className="bg-yellow-500 my-4 md:bg-white flex h-24 items-center w-full lg:px-8 py-2 justify-around">
              <p className="text-sm hover:border-b-2 transition-all border-black py-2  cursor-pointer hover:text-sky-600">
                جدید ترین
              </p>
              <p className="text-sm hover:border-b-2 transition-all border-black py-2  cursor-pointer hover:text-sky-600">
                پرفروش ترین
              </p>
              <p className="text-sm hover:border-b-2 transition-all border-black py-2  cursor-pointer hover:text-sky-600">
                از قیمت پایین
              </p>
              <p className="text-sm hover:border-b-2 transition-all border-black py-2  cursor-pointer hover:text-sky-600">
                از قیمت بالا
              </p>
              <DotsThreeOutlineVertical
                onClick={openModal}
                className="lg:hidden"
                size={32}
              />
            </div>
            <div className="flex justify-around space-y-4 lg:space-y-0 h-full w-full px-12  items-around flex-wrap">
              {products.map((product, i) => {
                return (
                  <div
                    key={i}
                    className="border flex w-9/12 lg:w-52 lg:h-68 h-96 flex-col"
                  >
                    <div className="absolute bg-yellow-400 cursor-pointer hover:scale-125 transition-all rounded-full -translate-y-4">
                      <PlusCircle color="black" size={45} />
                    </div>
                    <div className="flex h-62 bg-gray-300 w-full h-full justify-center items-center">
                      <img
                        className=" h-52 object-contain"
                        src={product}
                        alt=""
                      />
                    </div>
                    <div className="flex  flex-col py-4 space-y-4 justify-center items-center">
                      <div>
                        <h1>نام کالا</h1>
                      </div>
                      <div className="flex space-x-4 justify-around flex-row">
                        <p className="text-sky-400">تومان</p>
                        <p className="text-sky-400 flex flex-row-reverse">
                          30000
                        </p>
                        <p>:قیمت</p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="bg-black border-b-2 border-yellow-400 text-white w-24">
                          جزئیات کالا
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex w-full  p-5 w-full justify-around items-center">
              <div
                onClick={() => {
                  setPage(page - 1);
                }}
                className="border-4 w-14 h-14 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition rounded-full"
              >
                <ArrowFatLeft size={32} />
              </div>
              <div className="font-bold text-lg bg-black text-white w-14 h-14 justify-center items-center rounded-full flex">
                {page}
              </div>
              <div
                onClick={() => {
                  setPage(page + 1);
                }}
                className="border-4 w-14 h-14 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition rounded-full"
              >
                <ArrowFatRight size={32} />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex  w-1/2 space-y-8 flex flex-col   ">
            <div className="flex items-center py-6 flex-col ">
              <h2 className="text-right w-full font-bold text-lg ">جست و جو</h2>
              <div className="flex border-b border-gray-300 justif-center items-center w-full">
                <input
                  placeholder="نام محصول یا نام برند"
                  className="py-3 w-full "
                  type="text"
                />
                <MagnifyingGlass color="gray" size={32} />
              </div>
            </div>
            <div className="flex flex-col space-y-4 items-end ">
              <h1 className="font-bold text-xl">دسته بندی ها</h1>
              <div className="flex text-md  h-full space-y-3  justify-around text-right flex-col">
                <p className="cursor-pointer hover:text-blue-400">شیر آلات</p>
                <p className="cursor-pointer hover:text-blue-400">برق آلات</p>
                <p className="cursor-pointer hover:text-blue-400">
                  مصالح نازک کاری
                </p>
                <p className="cursor-pointer hover:text-blue-400">
                  تاسیسات برقی
                </p>
                <p className="cursor-pointer hover:text-blue-400">آشپزخانه</p>
                <p className="cursor-pointer hover:text-blue-400">
                  لوازم ایمینی
                </p>
                <p className="cursor-pointer hover:text-blue-400">
                  مصالح سفت کاری
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 items-end ">
              <h1 className="font-bold text-xl">برند ها</h1>
              <div className="flex w-full justify-between">
                <div className="flex text-sm  h-full space-y-3  justify-around text-right flex-col">
                  <p className="cursor-pointer hover:text-blue-400">اخوان</p>
                  <p className="cursor-pointer hover:text-blue-400">
                    استیل البرز
                  </p>
                  <p className="cursor-pointer hover:text-blue-400">بوتان</p>
                  <p className="cursor-pointer hover:text-blue-400">
                    ایلیا استیل
                  </p>
                  <p className="cursor-pointer hover:text-blue-400">آشپزخانه</p>
                  <p className="cursor-pointer hover:text-blue-400">
                    لوازم ایمینی
                  </p>
                  <p className="cursor-pointer hover:text-blue-400">
                    مصالح سفت کاری
                  </p>
                </div>
                <div className="flex text-sm  h-full space-y-3  justify-around text-right flex-col">
                  <p className="cursor-pointer hover:text-blue-400">راسان</p>
                  <p className="cursor-pointer hover:text-blue-400">گلنور</p>
                  <p className="cursor-pointer hover:text-blue-400">
                    الکتروپیک
                  </p>
                  <p className="cursor-pointer hover:text-blue-400">
                    ایران رادیاتو
                  </p>
                  <p className="cursor-pointer hover:text-blue-400">آشپزخانه</p>
                  <p className="cursor-pointer hover:text-blue-400">
                    لوازم ایمینی
                  </p>
                  <p className="cursor-pointer hover:text-blue-400">
                    مصالح سفت کاری
                  </p>
                </div>
              </div>
            </div>
          </div>
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

                  <div className="flex px-8 flex-col space-y-5 text-right mt-20">
                    <div className="flex flex-col space-y-4 items-end ">
                      <h1 className="font-bold border-b-2 w-full py-2 text-xl">
                        دسته بندی ها
                      </h1>
                      <div className="flex text-md  h-full space-y-3  justify-around text-right flex-col">
                        <p className="cursor-pointer hover:text-blue-400">
                          شیر آلات
                        </p>
                        <p className="cursor-pointer hover:text-blue-400">
                          برق آلات
                        </p>
                        <p className="cursor-pointer hover:text-blue-400">
                          مصالح نازک کاری
                        </p>
                        <p className="cursor-pointer hover:text-blue-400">
                          تاسیسات برقی
                        </p>
                        <p className="cursor-pointer hover:text-blue-400">
                          آشپزخانه
                        </p>
                        <p className="cursor-pointer hover:text-blue-400">
                          لوازم ایمینی
                        </p>
                        <p className="cursor-pointer hover:text-blue-400">
                          مصالح سفت کاری
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 items-end ">
                      <h1 className="font-bold border-b-2 w-full py-2 text-xl">
                        برند ها
                      </h1>
                      <div className="flex w-full justify-between">
                        <div className="flex text-sm  h-full space-y-3  justify-around text-right flex-col">
                          <p className="cursor-pointer hover:text-blue-400">
                            اخوان
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            استیل البرز
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            بوتان
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            ایلیا استیل
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            آشپزخانه
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            لوازم ایمینی
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            مصالح سفت کاری
                          </p>
                        </div>
                        <div className="flex text-sm  h-full space-y-3  justify-around text-right flex-col">
                          <p className="cursor-pointer hover:text-blue-400">
                            راسان
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            گلنور
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            الکتروپیک
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            ایران رادیاتو
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            آشپزخانه
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            لوازم ایمینی
                          </p>
                          <p className="cursor-pointer hover:text-blue-400">
                            مصالح سفت کاری
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Footer />
    </div>
  );
}
