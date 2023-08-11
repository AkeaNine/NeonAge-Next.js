"use client";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  }
  return (
    <div className="flex items-center space-x-1">
      <div>
        <MdOutlineLightMode />
      </div>
      <Switch checked={theme === "dark"} onClick={() => switchTheme()} />
      <div>
        <BsFillMoonStarsFill />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
