import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../../../components/ui/sheet";
import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import SheetLinks from "./SheetLinks";
import Logo from "./Logo";

function SheetBar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="p-2">
          <FiMenu size={25} />
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className="h-full">
          <div className="h-full pb-5">
            <SheetHeader>
              <div className="flex justify-between">
                <SheetTitle>
                  <Logo/>
                </SheetTitle>
                <SheetClose>
                  <div className="border border-dashed">
                    <IoCloseSharp size={25} />
                  </div>
                </SheetClose>
              </div>
            </SheetHeader>
            <SheetLinks />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SheetBar;
