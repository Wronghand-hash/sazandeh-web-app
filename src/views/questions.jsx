import Faq from "../components/Faq.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from '../components/footer'

export default function Questions() {
  return (
    <div className="flex flex-col bg-gray-300 w-full h-full">
      <Navbar />
      <div className="flex flex-col pt-20 lg:pt-32 w-full h-full justify-center items-center">
        <div className="flex h-full py-14">
          <h1 className="font-bold text-4xl"> سوال های متداول چاره جو</h1>
        </div>
        <div className="flex p-5 m-5 bg-gray-50 rounded-md shadow-2xl w-10/12">
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  );
}
