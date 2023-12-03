"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import CartProducts from "./CartProducts";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { hideLoading } from "@/app/redux/slices/cart";
import { Prisma } from "@prisma/client";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import axios from "axios";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";

// interface CardSheetProps {
//   cart: string;
// }

const CardSheet = () => {
  const dispatch = useDispatch();
  const { loading, cartItems } = useSelector((state: any) => state.cart);
  // const cartToUse = JSON.parse(cartItems)

  const session = useSession();

  async function setCart() {
    const res = await axios.get("/api/user/getCartData");
    const cart = res.data;
    Cookies.set("cart", cart);
  }
  useEffect(() => {
    if (session.status === "authenticated") {
      setCart();
    }
    dispatch(hideLoading());
  }, [dispatch]);

  console.log(cartItems);

  return (
    <>
      <div className="leading-none absolute right-1 bottom-4 bg-red-500 rounded-full pointer-events-none">
        <span className="text-md text-white">{cartItems.length}</span>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>
            <div className="px-2">
              <BiSolidShoppingBag size={25} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex justify-between items-center border-b pb-4">
                <SheetTitle>Your Cart</SheetTitle>
                <SheetClose>
                  <div className="border border-dashed">
                    <IoCloseSharp size={25} />
                  </div>
                </SheetClose>
              </div>
            </SheetHeader>
            {loading ? (
              <div>Loading Cart</div>
            ) : (
              <div>
                <section>
                  <CartProducts cart={cartItems} />
                </section>
                <section>{/* cart total */}</section>
                <section>{/* checkout button */}</section>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default CardSheet;
