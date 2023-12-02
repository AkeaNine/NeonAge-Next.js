"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const session = useSession();

  async function getCart() {
    if (session.status === "authenticated") {
      try {
        const userCart: any = (await axios.get("/api/user/userCart")).data.cart;
        console.log(userCart);
        if (userCart !== null && userCart !== undefined) {
          localStorage.setItem("cart", userCart);
        } else {
          localStorage.setItem("cart", JSON.stringify([]));
        }
      } catch (error: any) {
        console.log("no cart");
      }
    } else {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        return;
      } else {
        localStorage.setItem("cart", JSON.stringify([]));
      }
    }
  }

  useEffect(() => {
    getCart();
  }, [session, session.status]);

  return <>{children}</>;
};

export default CartProvider;
