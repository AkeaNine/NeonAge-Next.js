import ClientScrollWrapper from "@/app/(site)/components/navigation/secondaryNav/components/ClientScrollWrapper";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SecondImagesComp from "./SecondImagesComp";
import { useSearchParams } from "next/navigation";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface ProductImageSliderProps {
  SecondImages: any[];
  selectedColor: string | string[] | undefined;
}

const ProductImageSlider = async ({
  SecondImages,
}: ProductImageSliderProps) => {

  const [primaryImage, setPrimaryImage] = useState(0);

  function HnadleSecondImageClick(index: number) {
    setPrimaryImage(index);
  }

  function HandleImagePrevClick() {
    if (primaryImage === 0) {
      setPrimaryImage(SecondImages.length - 1)
    } else {
      setPrimaryImage(prevState => prevState - 1)
    }
  }

  function HandleImageNextClick() {
    if (primaryImage === SecondImages.length-1) {
      setPrimaryImage(0)
    } else {
      setPrimaryImage(prevState => prevState + 1)
    }
  }

  return (
    <div className="w-full grid grid-rows-4 grid-cols-6 h-[500px] lg:h-[700px]">
      <div className="row-span-3 col-start-2 col-end-6 w-full flex justify-center items-center mb-2">
        {/* <PrimaryImage image={primaryImage} /> */}
        <div className="p-2 m-1 rounded-full cursor-pointer hover:bg-gray-400 bg-gray-300 select-none"
        onClick={() => {HandleImagePrevClick()}}
        >
          <AiOutlineArrowLeft size={28}/>
        </div>
        <Image
          alt={""}
          src={SecondImages[primaryImage] ? SecondImages[primaryImage].props.src : SecondImages[0].props.src}
          width={200}
          height={300}
          className="h-full w-auto object-cover cursor-pointer rounded-sm"
        />
        <div className="p-2 m-1 rounded-full cursor-pointer hover:bg-gray-400 bg-gray-300 select-none"
        onClick={() => {HandleImageNextClick()}}
        >
          <AiOutlineArrowRight size={28}/>
        </div>
      </div>
      <div className="row-span-1 row-start-4 col-span-6 flex justify-center">
        <div className="h-full w-[90%] flex justify-center">
          <ClientScrollWrapper>
            <SecondImagesComp
              secondImages={SecondImages}
              handleClick={HnadleSecondImageClick}
            />
          </ClientScrollWrapper>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductImageSlider);
