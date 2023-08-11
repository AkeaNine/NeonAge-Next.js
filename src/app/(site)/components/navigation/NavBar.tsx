import Link from "next/link";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import DesktopNavbar from "./desktop/DesktopNavbar";
import DesktopSearch from "./desktop/DesktopSearch";
import MobileSheetBar from "./mobile/MobileNavbar";
import MobileSearch from "./mobile/MobileSearch";
import Logo from "./mobile/components/Logo";

function NavBar() {
  return (
    <div className="flex justify-between items-center h-12 md:h-14 space-x-4">
      <div className="lg:hidden">
        <MobileSheetBar />
      </div>
      <div className="px-4">
        <Logo />
      </div>
      <div className="hidden lg:block flex-1">
        <DesktopNavbar />
      </div>
      <div className="flex items-center lg:flex-1 h-full">
        <div className="lg:flex-1 h-full">
          <div className="lg:hidden">
            <MobileSearch />
          </div>
          <div className="hidden lg:block relative h-full">
            <DesktopSearch />
          </div>
        </div>
        <div>
          <div className="hidden lg:block">
            <Link href={"/"}>
              <Favorite />
            </Link>
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
