import MainFooter from "../../MainComponents/MainFooter";
import Navigation from "../../MainComponents/Navigation";
import CardBox from "./components/CardBox";

const page = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-between">
      <div className="w-full">
        <Navigation />
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <section className="w-full max-w-[1399px]">
            <div className="w-full p-2 lg:p-5 flex justify-center">
              <CardBox />
            </div>
          </section>
        </div>
      </div>
      <div className="w-full">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
