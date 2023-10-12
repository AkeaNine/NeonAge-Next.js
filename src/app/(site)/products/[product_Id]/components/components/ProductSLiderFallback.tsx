import ClientScrollWrapper from "@/app/(site)/components/navigation/secondaryNav/components/ClientScrollWrapper";
import SecondImagesComp from "./SecondImagesComp";
import { useState } from "react";

interface ProductSLiderFallbackProps {
  SecondImages: any[];
}

const ProductSLiderFallback = ({
  SecondImages,
}: ProductSLiderFallbackProps) => {
  const [primaryImage, setPrimaryImage] = useState(0);

  function HnadleSecondImageClick(index: number) {
    setPrimaryImage(index);
  }
  return (
    <div className="w-full grid grid-rows-4 grid-cols-6 h-[500px] lg:h-[600px]">
      <div className="row-span-3 col-start-2 col-end-6 w-full flex justify-center mb-2 cursor-pointer">
        {/* <PrimaryImage image={primaryImage} /> */}
        <div className="h-full w-full flex justify-center items-center">
          Loading Image..
        </div>
      </div>
      <div className="row-span-1 row-start-4 col-span-6 flex justify-center">
        <div className="h-full w-[90%] flex justify-center">
          <ClientScrollWrapper>
            <SecondImagesComp secondImages={SecondImages}handleClick={HnadleSecondImageClick}/>
          </ClientScrollWrapper>
        </div>
      </div>
    </div>
  );
};

export default ProductSLiderFallback;
