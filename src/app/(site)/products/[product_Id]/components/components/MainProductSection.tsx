"use client";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ProdSizeColPrice from "./ProdSizeColPrice";
import ProductImageSlider from "./ProductImageSlider";
import ProductSLiderFallback from "./ProductSLiderFallback";
import { useNextSanityImage } from "next-sanity-image";
import client from "@/hooks/Sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

interface MainProductSectionProps {
  description: [];
  discount: number;
  price: number;
  sku: string;
  title: string;
  selectedColor: string | string[] | undefined;
  selectedSize: string | string[] | undefined;
  colorObj: {
    dp: [
      {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      }
    ];
    sfs: [
      {
        size: string;
        _key: string;
        stock: number;
      }
    ];
    images: [];
    color: string;
  };
  colors: string[];
}

const MainProductSection = ({
  description,
  discount,
  colorObj,
  price,
  sku,
  title,
  colors,
  selectedColor,
  selectedSize,
}: MainProductSectionProps) => {
  const router = useRouter();

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  const DP = <Image src={urlFor(colorObj.dp).url()} alt={""} />
  // const [SecondImages, setSecondImages] = useState<React.JSX.Element[]>([]);
  const SecondImages: any[] = [DP]
  colorObj.images.map((i, index) => {
    SecondImages.push(<Image src={urlFor(i).url()} alt={""} />)
  });

  console.log(SecondImages);

  return (
    <div className="w-full h-fit md:flex">
      {/* main product */}
      <div className="w-full md:w-2/4">
        {/* images */}
        <Suspense
          fallback={<ProductSLiderFallback SecondImages={SecondImages} />}
        >
          <ProductImageSlider SecondImages={SecondImages} />
        </Suspense>
      </div>
      <div className="w-full md:w-2/4">
        <div className="py-4 px-8 w-full">
          {/* name price color size */}
          <ProdSizeColPrice
            title={title}
            discount={discount}
            price={price}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            sfs={colorObj.sfs}
            colors={colors}
            sku={sku}
          />
        </div>
        <div>
          {/* description */}
          Description
        </div>
      </div>
    </div>
  );
};

export default MainProductSection;
