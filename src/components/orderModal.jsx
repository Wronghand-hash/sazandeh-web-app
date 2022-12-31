import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { NotePencil, CaretUp, CaretDown } from "phosphor-react";
import eightproduct from "../assets/images/productImages/eightproduct.webp";
import { Disclosure } from "@headlessui/react";

export default function orderModal(props) {
  let [orderModal, setOrderModal] = useState(false);

  function closeOrderModal() {
    setOrderModal(false);
  }

  function openOrderModal() {
    setOrderModal(true);
  }
  return (
    <div className="w-full h-full">
      <button
        onClick={openOrderModal}
        className="bg-yellow-400 py-2 hover:bg-yellow-500 px-4 rounded shadow-xl"
      >
        <NotePencil size={20} />
      </button>
      <Transition appear show={orderModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeOrderModal}>
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
                    سفارش
                  </Dialog.Title>
                  <div className="w-full py-5 bg-gray-100 space-y-4 flex-col h-full flex">
                    <div className="flex items-center justify-around border-b">
                      {props.order.title}
                      <h1>:نام</h1>
                    </div>
                    <div className="flex items-center justify-around border-b">
                      {props.order.city}
                      <h1>:شهر</h1>
                    </div>
                    <div className="flex items-center justify-around border-b">
                      {props.order.province}
                      <h1>:استان</h1>
                    </div>
                    <div className="flex items-center justify-around border-b">
                      {props.order.phoneNumber}
                      <h1>:شماره تماس</h1>
                    </div>
                    <div className="flex items-center justify-around border-b">
                      جمالزاده کوی البرز مجتمع اندیمشک
                      <h1>:آدرس کامل</h1>
                    </div>
                    <div className="flex items-center justify-around border-b">
                      <div className="w-full px-4">
                        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex flex-row-reverse w-full justify-between rounded-lg bg-yellow-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-yellow-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                  <span className="text-xl transition text-gray-900 font-bold">
                                    سبد خرید
                                  </span>
                                  <CaretDown
                                    className={`${
                                      open
                                        ? "font-bold rotate-180 transform"
                                        : "font-bold "
                                    } h-5 w-5 text-gray-900`}
                                    size={32}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                  <div className="flex space-y-4 flex-col items-center justify-center">
                                    <div className="flex flex-row-reverse hover:bg-sky-300 transition w-full h-16 shadow-2xl rounded-2xl justify-around items-center w-full bg-gray-100 border-b-2 border-gray-900">
                                      <div>
                                        <img
                                          className="object-contain w-10 h-10"
                                          src={eightproduct}
                                          alt=""
                                        />
                                      </div>
                                      <div> لوله</div>
                                      <div className="hidden lg:flex">
                                        240000
                                      </div>
                                      <div className="flex justify-center items-center">
                                        تعداد:2
                                      </div>
                                    </div>{" "}
                                    <div className="flex flex-row-reverse hover:bg-sky-300 transition w-full h-16 shadow-2xl rounded-2xl justify-around items-center w-full bg-gray-100 border-b-2 border-gray-900">
                                      <div>
                                        <img
                                          className="object-contain w-10 h-10"
                                          src={eightproduct}
                                          alt=""
                                        />
                                      </div>
                                      <div> لوله</div>
                                      <div className="hidden lg:flex">
                                        240000
                                      </div>
                                      <div className="flex justify-center items-center">
                                        تعداد:2
                                      </div>
                                    </div>
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full space-x-4 px-4 justify-around items-center">
                      <button className="w-full rounded shadow-xl hover:bg-green-800 font-bold transition hover:text-gray-50  h-8 bg-green-500">
                        افزودن به ارسال شده
                      </button>
                      <button className="w-full rounded shadow-xl hover:bg-red-800 font-bold transition hover:text-gray-50  h-8 bg-red-500">
                        رد سفارش
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
