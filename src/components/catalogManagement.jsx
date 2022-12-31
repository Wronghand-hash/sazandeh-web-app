import { Upload } from "phosphor-react";
export default function catalogManagement() {
  return (
    <div className="w-screen h-full">
      <div className="flex lg:p-20 w-full justify-center">
        <div className="w-full py-14 w-10/12 space-y-4 flex-col h-full flex">
          <div className="flex justify-around items-center w-full">
            <button className="px-6 py-2 flex flex-col shadow-2xl hover:bg-yellow-500 hover:text-gray-900 font-bold bg-black justify-center items-center text-white  hover:border-b-6 transition-all border-yellow-500">
              <Upload size={40} />
              <p>بارگذاری تصویر</p>
            </button>
            <button className="px-6 py-2 flex flex-col shadow-2xl hover:bg-yellow-500 hover:text-gray-900 font-bold bg-black justify-center items-center text-white  hover:border-b-6 transition-all border-yellow-500">
              <Upload size={40} />
              <p>بارگذاری فایل</p>
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
              placeholder="..... تعداد صفحات"
              name="price"
              type="number"
            />
            <label
              className="font-bold bg-gray-100 w-1/2 flex justify-center items-center p-3"
              htmlFor="name"
            >
              صفحات
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
      </div>
    </div>
  );
}
