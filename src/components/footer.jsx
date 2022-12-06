import {
  MapPin,
  EnvelopeSimple,
  PhoneOutgoing,
  CaretRight,
} from "phosphor-react";

export default function Footer() {
  return (
    <div className="w-screen h-96 bg-neutral-800 mt-9 flex flex-row-reverse justify-end">
      <div className=" w-96 h-full   flex flex-col space-y-9 items-end justify-center">
        <h1 className="text-white font-semibold text-lg">
          با ما در ارتباط باشید
        </h1>
        <h2 className="text-md transition text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer text-neutral-500 space-x-3 flex justify-center">
          <MapPin size={20} weight="fill" />
          <span>
            لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ و با
          </span>
        </h2>
        <h2 className="text-md transition ease-in duration-200 hover:text-yellow-400 cursor-pointer text-neutral-500 space-x-3 flex justify-center">
          <EnvelopeSimple size={20} weight="fill" />
          <span>info@sazandeh.com</span>
        </h2>
        <h2 className="text-md transition ease-in duration-200 hover:text-yellow-400 cursor-pointer text-neutral-500 space-x-3 flex justify-center">
          <PhoneOutgoing size={20} weight="fill" /> <span>123-456-1345 </span>
        </h2>
      </div>
      <div className=" w-96 h-full   flex flex-col space-y-9 items-end justify-center">
        <h1 className="text-white font-semibold text-lg">دسترسی های سریع</h1>
        <div className="flex flex-col items-end space-y-3 justify-start">
          <div className="flex items-center space-x-4">
            <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
              صفحه ی اصلی
              <CaretRight size={13} weight="light" />
            </h1>
            <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
              ارتباط با ما
              <CaretRight size={13} weight="light" />
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
              درباره ی ما
              <CaretRight size={13} weight="light" />
            </h1>
            <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
              قوانین و مقررات
              <CaretRight size={13} weight="light" />
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
              محصولات <CaretRight size={13} weight="light" />
            </h1>
            <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
              خدمات مشاوره <CaretRight size={13} weight="light" />
            </h1>
          </div>
          <h1 className="transition text-white flex flex-row-reverse items-center text-right ease-in duration-200 hover:text-yellow-400 cursor-pointer">
            وبلاگ سازنده
            <CaretRight size={13} weight="light" />
          </h1>
        </div>
      </div>
    </div>
  );
}
