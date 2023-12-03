import { adCartItem } from "@/app/redux/slices/cart";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface AddToCardButtonProps {
  id: string;
  qty: number;
  size: string | string[] | undefined;
  color: string | string[] | undefined;
}

const AddToCardButton = ({ id, qty, size, color }: AddToCardButtonProps) => {
  const [isWorking, setIsWorking] = useState(false);
  const session = useSession();
  const dispatch = useDispatch();
  const { toast } = useToast();

  async function HandleButtonClick() {
    setIsWorking(true);
    const prodToAdd = { id: id, qty: qty, color: color, size: size };
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
