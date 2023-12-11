"use client";

import { adCartItem } from "@/app/redux/slices/cart";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface SlidingPoductCartBTNProps {
  id: any;
  color: any;
  size: any;
  title: any
}

const SlidingPoductCartBTN = ({
  id,
  color,
  size,
  title
}: SlidingPoductCartBTNProps) => {
  const [isWorking, setIsWorking] = useState(false);

  const dispatch = useDispatch();

  const session = useSession();
  const { toast } = useToast();

  async function HandleButtonClick() {
    setIsWorking(true);
    const prodToAdd = { id: id, qty: 1, color: color, size: size, title: title };
    if (session.status === "authenticated") {
      try {
        dispatch(adCartItem({ prodToAdd, authenticated: true }));
        toast({
          variant: "default",
          description: "Cart updated sucessfully",
        });
        setIsWorking(false);
      } catch (error: any) {
        toast({
          variant: "destructive",
          description: error.message,
        });
        setIsWorking(false);
      }
    } else {
      try {
        dispatch(adCartItem({ prodToAdd, authenticated: false }));
        toast({
          variant: "default",
          description: "Cart updated sucessfully",
        });
        setIsWorking(false);
      } catch (error: any) {
        toast({
          variant: "destructive",
          description: error.message,
        });
        setIsWorking(false);
      }
    }
  }

  return (
    <button
      className="bg-black text-white dark:bg-white dark:text-black px-2 py-2 rounded-md flex-1 flex justify-center items-center"
      onClick={() => HandleButtonClick()}
      disabled={isWorking}
    >
      <p className="flex-shrink overflow-hidden whitespace-nowrap uppercase text-xs md:text-sm">
        add to cart
      </p>
    </button>
  );
};

export default SlidingPoductCartBTN;
