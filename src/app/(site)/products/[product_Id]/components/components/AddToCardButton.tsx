import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AddToCardButtonProps {
  id: string;
  qty: number;
  size: string | string[] | undefined;
  color: string | string[] | undefined;
}

const AddToCardButton = ({ id, qty, size, color }: AddToCardButtonProps) => {
  const [isWorking, setIsWorking] = useState(false);
  const session = useSession();
  const { toast } = useToast();
  const router = useRouter()

  async function updateDBCart(cart: any) {
    try {
      await axios.post("/api/user/updateCart", cart).then((res) => {
        if (res.status === 200) {
          localStorage.setItem("cart", JSON.stringify(cart));
          toast({
            variant: "default",
            description: "Cart updated sucessfully",
          });
          setIsWorking(false);
        }
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        description:
          "Something went wrong. PLease refresh the page and try again",
      });
      setIsWorking(false);
    }
  }

  async function HandleButtonClick() {
    setIsWorking(true);
    const prodToAdd = { id: id, qty: qty, color: color, size: size };
    const initCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProd = initCart.find(
      (item: any) =>
        item.id === prodToAdd.id &&
        item.color === prodToAdd.color &&
        item.size === prodToAdd.size
    );
    console.log(existingProd);

    if (existingProd) {
      const updatedCart = initCart.map((item: any) => {
        if (item === existingProd) {
          return prodToAdd;
        }
        return item;
      });
      if (session.status === "authenticated") {
        updateDBCart(updatedCart);
      } else {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast({
          variant: "default",
          description: "Cart updated sucessfully",
        });
        setIsWorking(false);
      }
    } else {
      const updatedCart = [...initCart, prodToAdd];
      if (session.status === "authenticated") {
        updateDBCart(updatedCart);
      } else {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast({
          variant: "default",
          description: "Cart updated sucessfully",
        });
        setIsWorking(false);
      }
    }
  }
  return (
    <div className="my-2 max-w-[400px]">
      <Button
        className="w-full h-12 text-base"
        onClick={() => {
          HandleButtonClick();
        }}
        disabled={isWorking}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddToCardButton;
