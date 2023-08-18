import { Button } from "@/components/ui/button";
import ImageSlider from "./components/ImageSlider";
import "../../../../css/topsellskew.css";

const TopSellingBlock = () => {
  
  return (
    <div className="w-full p-2 lg:p-5">
      <div className="w-full bg-gradient-to-br from-teal-400 via-purple-400 to-pink-400 rounded-md flex md:items-center relative">
        <div className="w-full md:w-2/4 h-[60vh] lg:w-[600px] lg:h-[600px] md:p-10 lg:p-16">
          <ImageSlider />
        </div>
        <div className="absolute h-full w-full left-0 top-0 md:relative md:w-2/4">
          <div className="relative w-full h-full">
            <div className="h-full w-full overflow-hidden absolute left-0 top-0 md:hidden">
              <div className=" relative h-full w-full overflow-hidden">
                <div className="h-[150%] w-full absolute top-72 left-0 bg-gray-800 bg-opacity-30 top-selling-skew-ele"></div>
              </div>
            </div>
            <div className="absolute md:relative w-2/4 md:w-3/4 md:pl-20 flex flex-col items-end space-y-2 md:items-start bottom-14 md:bottom-0 right-10 md:left-0 text-white">
              <h2 className="text-lg md:text-2xl uppercase font-bold">Top Sellings</h2>
              <p className="text-sm md:text-lg break-words text-right md:text-left font-medium">
                Browse Through the Top Selling items of our huge collection of products
              </p>
              <Button className="md:p-6 border border-gray-50 bg-black dark:text-white dark:hover:bg-gray-800 text-md md:text-base">Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingBlock;
