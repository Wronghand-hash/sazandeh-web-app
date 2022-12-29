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
import { useState } from "react";
export default function ordersManagement() {
  const [ascention, setAscention] = useState(false);

  let products = [
    { title: "مشتری", city: "کرمان", image: oneproduct },
    { title: "مشتری", city: "کرمان", image: twoproduct },
    { title: "مشتری", city: "کرمان", image: threeproduct },
    { title: "مشتری", city: "کرمان", image: fourproduct },
    { title: "مشتری", city: "کرمان", image: fiveproduct },
    { title: "مشتری", city: "کرمان", image: sixproduct },
    { title: "مشتری", city: "کرمان", image: sevenproduct },
    { title: "مشتری", city: "کرمان", image: eightproduct },
    { title: "مشتری", city: "کرمان", image: nineproduct },
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
          <div className="flex bg-white  px-2 py-2 rounded  w-11/12 justify-center items-center space-y-3 flex-col">
            {products.map((product) => {
              return (
                <div className="flex flex-row-reverse hover:bg-sky-300 transition w-full h-16 shadow-2xl rounded-2xl justify-around items-center w-full bg-gray-100 border-b-2 border-gray-900">
                  <div>
                    <h1 className="text-green-500 text-sm">ارسال شده</h1>
                  </div>
                  <div> {product.title}</div>
                  <div className="hidden lg:flex">{product.city}</div>
                  <div className="flex space-x-2 mx-4 lg:mx-0 w-24">
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 rounded shadow-xl">
                      بیشتر
                    </button>
                    <div className="bg-red-400 hover:bg-red-500 px-4 rounded shadow-xl">
                      <Trash className=" text-white" size={28} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
