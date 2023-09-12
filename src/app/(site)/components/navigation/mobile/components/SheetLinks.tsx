import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BiSolidDiscount } from "react-icons/bi";
import { FaPercent } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import {AiFillHeart} from "react-icons/ai"
import ThemeSwitcher from "../../../ThemeSwitcher";

function SheetLinks() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 pt-5">
        <Link href={"/"}>
          <div className="text-base md:text-lg flex items-center justify-between p-2 border-b border-gray-500 mb-5">
            Home
            <AiFillHome />
          </div>
        </Link>
        <div className="mb-5">
          <Link href={"/featured"}>
            <div className="text-md md:text-base p-2 border-b border-gray-300">Featured</div>
          </Link>
          <Link href={"/"}>
            <div className="text-md md:text-base flex items-center justify-start p-2 border-b border-gray-300">
              <p>Discounts</p>
              <FaPercent size={16} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="text-md md:text-base flex items-center justify-start p-2 border-b border-gray-300">
              Coupons
              <BiSolidDiscount size={18} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="text-md md:text-base flex items-center justify-start p-2 border-b border-gray-300">
              Favorites
              <AiFillHeart size={18} />
            </div>
          </Link>
        </div>
        <div>
          <Link href={"/account"}>
            <div className="text-md md:text-base flex items-center justify-between p-2 border-b border-gray-300">
              Account
              <RiAccountPinBoxLine size={18} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="text-md md:text-base flex items-center justify-between p-2 border-b border-gray-300">
              Contact
              <FaPaperPlane size={18} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="text-md md:text-base flex items-center justify-between p-2 border-b border-gray-300">
              Support
              <BsHeadset size={18} />
            </div>
          </Link>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default SheetLinks;
