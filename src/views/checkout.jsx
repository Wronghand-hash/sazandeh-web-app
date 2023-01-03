import Navbar from "../components/navbar";
import Footer from "../components/footer";
import oneproduct from "../assets/images/productImages/oneproduct.webp";
import blogsImage from "../assets/images/blogsImage.jpg";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";
export default function Checkout() {
  return (
    <div className="w-full h-full">
      <Navbar></Navbar>
      <div className="w-screen h-auto bg-gray-300">
        <div
          style={{
            backgroundImage: `url(${blogsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex justiy-end overflow-hidden items-center w-full h-rem26 bg-black"
        >
          <div className="hidden lg:block w-96 h-96 bg-yellow-400 absolute transform rotate-45 -translate-x-64 overflow-hidden -translate-y-8"></div>
          <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
            <p className="text-white text-center mx-8 font-bold text-5xl">
              تکمیل خرید
            </p>
            <div className="flex text-white p-2 items-end space-x-3 flex-row">
              <p className="text-yellow-500 font-bold">تماس با ما</p>
              <AiOutlineLeft />
              <Link to={"/"}>
                <a
                  href="www.sazandeh.onredner.com"
                  className="text-white font-bold"
                >
                  خانه
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-auto w-full my-14  flex py-5 items-center justify-center lg:flex-row flex-col-reverse">
          <div className="w-96 bg-white px-28 h-auto flex items-center  flex-col  ">
            <h1 className="text-3xl font-black my-4 w-full text-right">
              اقلام انتخاب شده
            </h1>
            <div className="border flex w-9/12 lg:w-52 lg:h-68 h-96 flex-col">
              <div className="absolute bg-yellow-400 cursor-pointer hover:scale-125 transition-all rounded-full -translate-y-4">
                <PlusCircle color="black" size={45} />
              </div>
              <div className="flex h-62 bg-gray-300 w-full h-full justify-center items-center">
                <img className=" h-52 object-contain" src={oneproduct} alt="" />
              </div>
              <div className="flex  flex-col py-4 space-y-4 justify-center items-center">
                <div>
                  <h1>نام کالا</h1>
                </div>
                <div className="flex space-x-4 justify-around flex-row">
                  <p className="text-sky-400">تومان</p>
                  <p className="text-sky-400 flex flex-row-reverse">30000</p>
                  <p>:قیمت</p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-black border-b-2 border-yellow-400 text-white w-24">
                    جزئیات کالا
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-right h-52 w-full my-7 lg:w-96 bg-white border-2 border-mainWhite  shadow-xl flex items-end flex-col lg:mx-10 px-8">
            <h1 className="text-3xl font-black my-4 w-full">نحوه ی ارسال </h1>
            <Checkbox size="lg">
              <span className="text-2xl">پست پیشتاز</span>
            </Checkbox>
            <Checkbox size="lg">
              <span className="text-2xl">تیپاکس</span>
            </Checkbox>
          </div>
          <div className="w-auto h-carousel shadow-2xl   flex justify-end text-right items-center">
            <div className="h-full bg-white w-96 justify-around pb-20 flex items-center flex-col  my-2">
              <h1 className="m-5 text-4xl border-b py-2 border-black font-bold">
                اطلاعات ارسال
              </h1>

              <FormControl isRequired>
                <div className="h-full w-full flex justify-end items-center">
                  <FormLabel>
                    <span className="text-md font-light">ایمیل</span>
                  </FormLabel>
                </div>

                <Input placeholder="ایمیلتون رو وارد کنید" />
              </FormControl>
              <FormControl isRequired>
                <div className="h-full w-full flex justify-end items-center">
                  <FormLabel>
                    <span className="text-md font-light">
                      نام و نام خانوادگی
                    </span>
                  </FormLabel>
                </div>

                <Input placeholder="اسم کامل" />
              </FormControl>

              <FormControl isRequired>
                <div className="h-full w-full flex justify-end items-center">
                  <FormLabel>
                    <span className="text-md font-light">آدرس</span>
                  </FormLabel>
                </div>

                <Input placeholder="آدرس" />
              </FormControl>
              <div className=" h-10   pt-14 w-full flex items-center pr-24">
                <Select isRequired variant="filled" placeholder="استان">
                  <option>تهران</option>
                  <option>اصفحان</option>
                  <option>مشهد</option>
                  <option>مرکزی</option>
                  <option>تهران</option>
                  <option>آذربایجان غربی</option>
                </Select>
              </div>
              <FormControl isRequired>
                <div className="h-full w-full flex justify-end items-center">
                  <FormLabel className="">
                    <span className="text-md font-light text-right">شهر </span>
                  </FormLabel>
                </div>
                <Input placeholder="شهر" />
              </FormControl>
              <FormControl isRequired>
                <div className="h-full w-full flex justify-end items-center">
                  <FormLabel className="">
                    <span className="text-md font-light text-right">
                      شماره تلفن
                    </span>
                  </FormLabel>
                </div>
                <Input placeholder="شماره تلفن" />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
