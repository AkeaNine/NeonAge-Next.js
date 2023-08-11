"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

function DesktopSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const HandleOverlayClose = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative top-0 right-0 w-full h-full px-5 flex items-center">
      <div className="fixed left-0 top-0">
        <div
          className={
            isOpen
              ? "desktopSearchBarOverlay-open"
              : "desktopSearchBarOverlay-close"
          }
          onClick={() => HandleOverlayClose()}
        ></div>
      </div>
      <input
        placeholder="Search products..."
        onClick={() => setIsOpen(true)}
        className="w-full h-10 outline-none border-none rounded-md px-4"
      />
      {isOpen && (<div className="absolute h-[400px] w-full top-[3.5rem] left-0 bg-white rounded-lg mt-1">
        <ScrollArea>
          
        </ScrollArea>
      </div>)}
    </div>
  );
}

export default DesktopSearch;
