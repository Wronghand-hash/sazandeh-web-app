import { AiOutlineLeft } from "react-icons/ai";

export default function contactUs() {
  return (
    <div className="w-full">
      <div className="flex justiy-end items-center w-full h-96 bg-black">
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white text-5xl">تماس با ما</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">تماس با ما</p>
            <AiOutlineLeft />
            <p>خانه</p>
          </div>
        </div>
      </div>
    </div>
  );
}
