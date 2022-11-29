import Navbar from "../components/navbar";
import { AiOutlineLeft } from "react-icons/ai";

export default function homePage() {
  return (
    <div>
      <Navbar />
      <div className="flex justiy-end items-center w-full h-96 bg-black">
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">خانه</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">خانه</p>
            <AiOutlineLeft />
            <p>خانه</p>
          </div>
        </div>
      </div>
      homePage
    </div>
  );
}
