import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface AddToCardButtonProps {
  id: string;
  qty: number;
}

const AddToCardButton = ({ id, qty }: AddToCardButtonProps) => {
  const session = useSession();
  const [initCart, setInitCart] = useState<any>();
  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      try {
        const parsedCart = JSON.parse(localCart);
        setInitCart(parsedCart);
      } catch (error: any) {
        setInitCart([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  async function HandleButtonClick() {
    const prodToAdd = { id: id, qty: qty };
    const existInCart = initCart.find((item: any) => item.id === prodToAdd.id);
    if (existInCart) {
      const updatedCart = initCart.map((item: any) => {
        if (item.id === prodToAdd.id) {
          return { id: item.id, qty: item.qty + prodToAdd.qty };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, prodToAdd];
      setCart(updatedCart);
    }
  }
  return (
    <div className="my-2 max-w-[400px]">
      <Button
        className="w-full h-12 text-base"
        onClick={() => {
          HandleButtonClick();
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddToCardButton;

// if (session.status === "authenticated") {
//   try {
//     await axios.post("api/user/updateCart", cart).then(() => {

//     })
//   } catch (error: any) {
//     console.log("Something went wrong");

//   }
// }
