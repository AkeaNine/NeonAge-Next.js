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
import { PortableText } from "@portabletext/react";
import RichTextComp from "@/context/RichTextComp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface MainProductSectionProps {
  id: string;
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
  id,
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

  const DP = <Image src={urlFor(colorObj.dp).url()} alt={""} />;
  // const [SecondImages, setSecondImages] = useState<React.JSX.Element[]>([]);
  const SecondImages: any[] = [DP];
  colorObj.images.map((i, index) => {
    SecondImages.push(<Image src={urlFor(i).url()} alt={""} />);
  });
  return (
    <div className="w-full h-fit md:flex">
      {/* main product */}
      <div className="w-full md:w-2/4">
        {/* images */}
        <Suspense
          fallback={<ProductSLiderFallback SecondImages={SecondImages} />}
        >
          <ProductImageSlider
            SecondImages={SecondImages}
            selectedColor={selectedColor}
          />
        </Suspense>
      </div>
      <div className="w-full md:w-2/4">
        <div className="py-4 px-8 w-full">
          {/* name price color size */}
          <ProdSizeColPrice
            id={id}
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
        <div className="py-4 px-8 w-full">
          {/* description */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger disabled={false}>
                <p className=" font-medium text-base">Description</p>
              </AccordionTrigger>
              <AccordionContent>
                <PortableText value={description} components={RichTextComp} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link className="w-full border-b py-4 flex items-center justify-between hover:underline cursor-pointer" href={"#comments"}>
            <p className="font-medium text-base">Comments</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 shrink-0 transition-transform duration-200 transform rotate-[-90deg]"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </Link>
          <Link className="w-full border-b py-4 flex items-center justify-between hover:underline cursor-pointer" href={""}>
            <p className="font-medium text-base">Reviews</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0 transition-transform duration-200 transform rotate-[-90deg]"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainProductSection;
