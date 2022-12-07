import { AiOutlineLeft } from "react-icons/ai";
import Navbar from "../components/navbar";
import AboutusImage from "../assets/images/aboutusImage.webp";
import { Users, RocketLaunch, Heart, Clock } from "phosphor-react";

export default function aboutUs() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />

      <div
        style={{
          background:
            "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )",
          backgroundImage: `url(${AboutusImage})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex justiy-end overflow-hidden items-center w-full h-rem26 bg-black"
      >
        <div className="hidden lg:absolute w-96 h-96 bg-yellow-400 absolute transform rotate-45 overflow-hidden -translate-x-64 overflow-hidden -translate-y-8"></div>
        <div className="flex flex-col justify-end items-center w-1/2 h-1/2">
          <p className="text-white font-bold text-5xl">تماس با ما</p>
          <div className="flex text-white p-2 items-center align-center flex-row">
            <p className="text-yellow-500">تماس با ما</p>
            <AiOutlineLeft />
            <p className="text-white font-bold">خانه</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full lg:h-96 px-14">
        <div className="flex text-3xl font-bold px-4 py-8 lg:py-0 w-full flex-col justify-center items-end h-full bg-gray-200">
          <p>خدمات تخصصی</p>
          <p>ساختمانی و بازسازی</p>
        </div>
        <div className="flex flex-col items-center p-5 space-y-2 justify-center">
          <div>
            <Users className="p-2 bg-yellow-400" size={36} />
          </div>
          <h1 className="font-bold">تیم متخصص و حرفه ای</h1>
          <div className="flex text-center justify-center items-center">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، قرار گیرد
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-5 space-y-2 justify-center">
          <div>
            <Heart className="p-2 bg-yellow-400" size={36} />
          </div>
          <h1 className="font-bold">هزینه های متناسب و بهینه</h1>
          <div className="flex text-center justify-center items-center">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، قرار گیرد
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center p-5 space-y-2 justify-center">
          <div>
            <Clock className="p-2 bg-yellow-400" size={36} />
          </div>
          <h1 className="font-bold">زمان بندی و تحویل به موقع</h1>
          <div className="flex text-center justify-center items-center">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، قرار گیرد
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-12 justify-center  bg-blue-600 w-full h-32">
        <div className="flex text-white items-center justify-center flex-col">
          <div className="flex justify-center space-x-2">
            <p className="text-4xl font-bold">32</p>
            <p>
              <RocketLaunch size={24} />
            </p>
          </div>
          <div className="font-bold">پروژه های موفق</div>
        </div>
        <div className="flex border-r border-l px-5 text-white items-center justify-center flex-col">
          <div className="flex justify-center space-x-2">
            <p className="text-4xl font-bold">32</p>
            <p>
              <RocketLaunch size={24} />
            </p>
          </div>
          <div className="font-bold">متخصصان</div>
        </div>
        <div className="flex text-white items-center justify-center flex-col">
          <div className="flex justify-center space-x-2">
            <p className="text-4xl font-bold">32</p>
            <p>
              <Users size={24} />
            </p>
          </div>
          <div className="font-bold">مشتری های ما</div>
        </div>
      </div>
      <div className="flex flex-col w-full  lg:p-20 h-full justify-center items-center">
        <div className="flex item-center flex-col-reverse lg:flex-row lg:space-x-20 w-full lg:w-2/3 h-full">
          <div className="flex items-center px-5  py-24 text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
            متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
            سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
            تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
            طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
            توان امید داشت که تما لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توام و دشواری موجود در قرار گیرد.
          </div>
          <div className="flex justify-center lg:space-y-2 lg:flex-col h-full w-full">
            <div className="lg:w-52 w-full space-y-4 flex flex-col p-4 bg-yellow-400 h-full lg:h-78">
              <div className="flex w-full">
                <p className="px-2 text-white text-sm bg-sky-400">vision</p>
              </div>
              <p className="text-right px-5 font-bold text-2xl">چشم انداز ما</p>
              <p className="text-md lg:p-5 text-right">
                ده شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                افزارها شناخت بیشتری را برای طراحان رایانه ای
              </p>
            </div>
            <div className="lg:w-52 w-full space-y-4 flex flex-col p-4 bg-gray-400 h-full lg:h-78">
              <div className="flex w-full">
                <p className="px-2 text-white text-sm bg-sky-400">mission</p>
              </div>
              <p className="text-right px-5 font-bold text-2xl">ماموریت ما</p>
              <p className="text-md lg:p-5 text-right">
                ده شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                افزارها شناخت بیشتری را برای طراحان رایانه ای
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
