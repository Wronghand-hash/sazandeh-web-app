import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { NotePencil } from "phosphor-react";

export default function productModal(props) {
  let [productModal, setProductModal] = useState(false);

  function closeProductModal() {
    setProductModal(false);
  }

  function openProductModal() {
    setProductModal(true);
  }
  return (
    <div className="w-full h-full">
      <button
        onClick={openProductModal}
        className="bg-yellow-400 py-2 hover:bg-yellow-500 px-4 rounded shadow-xl"
      >
        <NotePencil size={20} />
      </button>
      <Transition appear show={productModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeProductModal}>
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
                    {props.product.title}
                  </Dialog.Title>
                  <div className="w-full space-y-4 flex-col h-full flex">
                    <div className="w-full py-5 bg-white space-y-4 flex-col h-full flex">
                      <div className="flex  items-center justify-center">
                        <img
                          className="rounded-full border object-contain w-14 h-14"
                          src={props.product.image}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center justify-around border-b">
                        {props.product.title}
                        <h1>:نام</h1>
                      </div>
                      <div className="flex items-center justify-around border-b">
                        {props.product.price}
                        <h1>:قیمت</h1>
                      </div>
                      <div className="flex items-center justify-around border-b">
                        32
                        <h1>:انبار</h1>
                      </div>
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
