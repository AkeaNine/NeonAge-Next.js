import Image from "next/image";
import ThemeSwitcher from "./(site)/components/ThemeSwitcher";
import Home from "./(site)/home/Home";
import NavBar from "./(site)/components/navigation/NavBar";
import DesktopSearchUtil from "./(site)/components/DesktopSearchUtil";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className=" flex justify-center w-full bg-gray-300 dark:bg-gray-800">
          <div className="w-full max-w-[1399px]">
            <nav>
              <NavBar />
            </nav>
          </div>
        </div>
        <div className="full">
          <div className="w-full bg-black">
            <div className="w-full max-w-[1399px]">
              <nav>

              </nav>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section>
          <Home />
        </section>
      </div>
    </div>
  );
}
