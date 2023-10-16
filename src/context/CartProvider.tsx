"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const session = useSession();

  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    async function getCart() {
      if (session.status === "authenticated") {
        try {
          const userCart: any = await (
            await axios.get("/api/user/userCart")
          ).data.cart;
          console.log(userCart);
          if (userCart !== null || userCart !== undefined) {
            setCart(userCart);
          } else {
            setCart([])
          }
        } catch (error: any) {
          console.log("no cart");
        }
      } else {
        const storedCart = localStorage.getItem("cart");
        const parsedCart = storedCart ? JSON.parse(storedCart) : [];
        setCart(parsedCart);
      }
    }

    getCart();
  }, [session, session.status]);

  return <>{children}</>;
};

export default CartProvider;
