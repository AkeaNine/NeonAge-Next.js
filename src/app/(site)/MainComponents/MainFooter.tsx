import Footer from "../components/footer/Footer";
import FooterCredit from "../components/footer/components/FooterCredit";

const MainFooter = () => {
  return (
    <div className="w-full">
      <div className=" flex justify-center w-full bg-[#232f3e] dark:bg-gray-800">
        <div className="w-full max-w-[1399px]">
          <div className="w-full text-white p-2 lg:p-5">
            <Footer />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-black">
        <div className="w-full max-w-[1399px]">
          <div className="w-full text-white p-2 lg:p-5">
            <FooterCredit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
