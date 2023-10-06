import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

const ProductImageSlider = async () => {
  // const images = await ()
  return (
    <div className="w-full grid grid-rows-4 h-[500px] lg:h-[600px]">
      <div className="row-span-3 w-full">
        <AspectRatio ratio={4 / 3}>
          {/* <Image src={"/"} alt={""}/> */}
        </AspectRatio>
      </div>
      <div>
        Second
      </div>
    </div>
  );
};

export default ProductImageSlider;
