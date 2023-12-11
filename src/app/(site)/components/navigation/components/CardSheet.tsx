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
import { fetchCart, hideLoading } from "@/app/redux/slices/cart";
import { Prisma } from "@prisma/client";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import axios from "axios";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

// interface CardSheetProps {
//   cart: string;
// }

const CardSheet = () => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch<any>();
  const { loading, cartItems } = useSelector((state: any) => state.cart);
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      dispatch(fetchCart());
    }
    dispatch(hideLoading());
    setMounted(true);
  }, [mounted, dispatch]);

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
          <SheetContent className="p-0 w-[100%] max-w-[320px] md:max-w-[360px]">
            <SheetHeader>
              <div className="flex justify-between items-center border-b p-2">
                <SheetTitle className="">Your Cart</SheetTitle>
                <SheetClose>
                  <div className="border border-dashed">
                    <IoCloseSharp size={25} />
                  </div>
                </SheetClose>
              </div>
              <div>
                <div className="pb-1 flex items-center justify-center space-x-1">
                  <span className="rounded-full bg-gray-400 h-6 w-6 flex items-center justify-center text-white">
                    {cartItems.length}
                  </span>{" "}
                  <p>Items in Total</p>
                </div>
              </div>
            </SheetHeader>
            {loading ? (
              <div>Loading Cart</div>
            ) : (
              <div className="">
                <section className="h-full">
                  <ScrollArea className="h-full w-full rounded-md border">
                    <CartProducts cart={cartItems} />
                  </ScrollArea>
                </section>
                <section className="h-[300px]">
                  {/* cart total */}
                  <div>{/* promo code */}</div>
                  <div>{/* sub total */}</div>
                  <div>
                    {/* total */}
                    <p>
                      Total:{" "}
                      {cartItems.reduce((total: number, item: any) => {
                        return total + item.qty * item.price;
                      }, 0)}
                    </p>
                    <p></p>
                  </div>
                </section>
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
