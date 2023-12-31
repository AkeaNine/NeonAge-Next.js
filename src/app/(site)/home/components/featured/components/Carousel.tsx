"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlidingProductModel from "@/app/(site)/components/product/SlidingProductModel";

interface CarouselProps {
  products: [
    {
      _type: string;
      description: [];
      title: string;
      colors: [];
      tags: [];
      _createdAt: string;
      _id: string;
      _rev: string;
      _updatedAt: string;
      sku: string;
      price: number;
      categories: [];
      discount: number;
    }
  ];
}

const CarouselBox: React.FC<CarouselProps> = ({ products }) => {
  
  return (
    <Swiper
      breakpoints={{
        310: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation, Pagination]}
      pagination={{
        dynamicBullets: true,
      }}
      grabCursor={true}
      navigation
    >
      {products.map((prod, index) => (
        <SwiperSlide key={index}>
          <SlidingProductModel product={prod}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselBox;
