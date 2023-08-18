"use client";
import client from "@/hooks/Sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
interface ProductImageProps {
  image: any;
}

const ProductImage: React.FC<ProductImageProps> = ({ image }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div>
      {/* @ts-ignore */}
      <Image {...imageProps} className="rounded-md object-cover" />
    </div>
  );
};

export default ProductImage;
