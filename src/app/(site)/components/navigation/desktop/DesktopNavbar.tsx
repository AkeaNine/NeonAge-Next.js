"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { BiSolidDiscount } from "react-icons/bi";
import { FaPercent } from "react-icons/fa";

function DesktopNavbar() {
  return (
    <div className="w-full flex justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <div className="flex space-x-4">
            <NavigationMenuItem>
              <Link href={"/"}>
                <p>Home</p>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"}>
                <p>Featured</p>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"}>
                <div className="flex items-center">
                  <p>Discounts</p>
                  <FaPercent size={16} />
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"}>
                <div className="flex items-center">
                  <p>Coupons</p>
                  <BiSolidDiscount size={18} />
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/"}>
                <p>Account</p>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default DesktopNavbar;
