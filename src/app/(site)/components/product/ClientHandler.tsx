"use client";

import { SwiperSlide } from "swiper/react";


interface ClientHandlerProps {
  children: React.ReactNode;
}

const ClientHandler: React.FC<ClientHandlerProps> = ({ children }) => {
  return (<SwiperSlide>{children}</SwiperSlide>);
};

export default ClientHandler;
