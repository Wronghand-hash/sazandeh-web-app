import {
  FileX,
  SortAscending,
  SortDescending,
  Trash,
  Upload,
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
import { useState } from "react";
export default function shopManagement() {
  const [ascention, setAscention] = useState(false);

  let products = [
    { title: "لوله", price: 232333, image: oneproduct },
    { title: "لورم", price: 232333, image: twoproduct },
    { title: "لورم", price: 232333, image: threeproduct },
    { title: "لورم", price: 232333, image: fourproduct },
    { title: "لورم", price: 232333, image: fiveproduct },
    { title: "لورم", price: 232333, image: sixproduct },
    { title: "لورم", price: 232333, image: sevenproduct },
    { title: "لورم", price: 232333, image: eightproduct },
    { title: "لورم", price: 232333, image: nineproduct },
  ];
  return (
    <div className="flex justify-center  w-full h-full">
      <div className="flex flex-col h-full  justify-center items-center">
        <div className="flex w-full font-bold justify-center py-5">
          مدیریت کالاها
        </div>

        <div className="flex flex-col w-full">
          <div className="flex w-full h-10 bg-gray-400">
            {ascention ? (
              <SortAscending size={30} />
            ) : (
              <SortDescending size={30} />
            )}
          </div>
          {products.map((product) => {
            return (
              <div className="flex h-16 justify-around items-center w-full bg-gray-100 border-b-2 border-gray-900">
                <div>
                  <img
                    className="object-contain w-10 h-10"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div> {product.title}</div>
                <div>{product.price}</div>
                <div>
                  <button>بیشتر</button>
                  <Trash />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full space-y-2 flex-col h-full flex">
          <div className="flex justify-center w-full">
            <button className="px-6 py-2 font-bold bg-black text-white  hover:border-b-6 transition-all border-yellow-500">
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
              className="bg-gray-100 w-1/2 flex justify-center items-center p-3"
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
              className="bg-gray-100 w-1/2 flex justify-center items-center p-3"
              htmlFor="name"
            >
              قیمت
            </label>
          </div>
          <div className="flex w-full border">
            <input
              onChange={(e) => setFullName(e.target.value)}
              className="w-full   text-right p-2"
              placeholder="...."
              name="name"
              type="text"
            />
            <label
              className="bg-gray-100 w-1/2 flex justify-center items-center p-3"
              htmlFor="name"
            >
              جزئیات بیشتر
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
