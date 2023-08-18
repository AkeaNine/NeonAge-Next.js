import getFeaturedProducts from "@/hooks/FeaturedProducts";
import CarouselBox from "./components/Carousel";
import SlidingProductModel from "@/app/(site)/components/product/SlidingProductModel";
import ClientHandler from "@/app/(site)/components/product/ClientHandler";
import { useState } from "react";

const FeaturedProducts = async () => {
  const products = await getFeaturedProducts();

  return (
      <CarouselBox products={products}/>
  );
};

export default FeaturedProducts;