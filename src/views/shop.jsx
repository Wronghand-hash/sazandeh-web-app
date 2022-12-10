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
import { useState } from "react";
import {
  ArrowFatRight,
  ArrowFatLeft,
  MagnifyingGlass,
  PlusCircle,
} from "phosphor-react";

export default function shopPage() {
  const [page, setPage] = useState(1);
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
      <div className="flex pt-52 w-full h-full justify-center ">
        <div className="w-9/12 h-full  flex">
          <div className="flex flex-col w-full ">
            <div className="flex h-24 items-center w-full px-8 py-2 justify-between">
              <div className="flex justify-around space-x-8">
                <p className="text-sm cursor-pointer hover:text-sky-600">
                  جدید ترین
                </p>
                <p className="text-sm cursor-pointer hover:text-sky-600">
                  پرفروش ترین
                </p>
                <p className="text-sm cursor-pointer hover:text-sky-600">
                  قیمت کم به زیاد
                </p>
                <p className="text-sm cursor-pointer hover:text-sky-600">
                  قیمت زیاد به کم
                </p>
              </div>
              <div className="flex">
                <div className="rounded-full w-20 justify-center p-3 text-sm flex bg-gray-200">
                  <p>محصول</p>
                  <p>12</p>
                </div>
              </div>
            </div>
            <div className="flex justify-around space-y-3 items-center flex-wrap">
              {products.map((product, i) => {
                return (
                  <div key={i} className="border flex w-52 h-76 flex-col">
                    <div className="absolute bg-yellow-400 cursor-pointer hover:scale-125 transition-all rounded-full -translate-y-4">
                      <PlusCircle color="black" size={32} />
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
          <div className="  w-1/2 space-y-8 flex flex-col   ">
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
      <Footer />
    </div>
  );
}
