import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

function CardSheet() {
  return (
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
          
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default CardSheet;
