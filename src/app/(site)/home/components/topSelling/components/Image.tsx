"use client";

import client from "@/hooks/Sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";


interface ImageProps {
  image: {};
}

const ImageModal: React.FC<ImageProps> = ({ image }) => {
  const imageProps = useNextSanityImage(client, image);
  return (
    <>
        <Image alt={""} priority {...imageProps} className="w-full h-full rounded-md object-cover" />
    </>
  );
};

export default ImageModal;
