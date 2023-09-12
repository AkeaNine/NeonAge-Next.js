import BeforeChorkiBlock from "./components/BeforeChorkiBlock/BeforeChorkiBlock";
import MoreCategories from "./components/MoreCategories/MoreCategories";
import FeaturedProducts from "./components/featured/FeaturedProducts";
import Canvas from "./components/mainCanvas/Canvas";
import TopSellingBlock from "./components/topSelling/TopSellingBlock";

function Home() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full p-2 lg:p-5 lg:grid grid-cols-4 gap-2 z-10">
        <Canvas />
      </div>
      <section>
        <TopSellingBlock />
      </section>
      <section>
        <div className="pt-10 pb-5">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            Featured Products
          </h2>
          <p className="text-md md:text-lg text-center">
            Currently Trendinhg and all time best sellings
          </p>
        </div>
        <div className="w-full p-2 lg:p-5">
          <FeaturedProducts />
        </div>
      </section>
      <section>
        <div className="w-full p-2 lg:p-5">
          <BeforeChorkiBlock />
        </div>
      </section>
      {/* // chorki */}
      <div className="w-full p-2 lg:p-5 flex justify-center">
        <MoreCategories />
      </div>
      <section></section>
    </div>
  );
}

export default Home;
