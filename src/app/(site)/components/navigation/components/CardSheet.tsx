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

interface CardSheetProps {
  cart: never[]
}

const CardSheet = ({cart}: CardSheetProps) => {

  return (
    <>
      <div className="leading-none absolute right-1 bottom-4 bg-red-500 rounded-full pointer-events-none">
        <span className="text-md text-white">{cart.length}</span>
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
              <div className="flex justify-between items-center">
                <SheetTitle>Your Cart</SheetTitle>
                <SheetClose>
                  <div className="border border-dashed">
                    <IoCloseSharp size={25} />
                  </div>
                </SheetClose>
              </div>
            </SheetHeader>
            <div>
              <div>
                <CartProducts cart={cart} />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default CardSheet;
