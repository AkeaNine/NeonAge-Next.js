"use client";

import { useEffect, useRef } from "react";

interface ClientScrollWrapperProps {
  children: React.ReactNode;
}

const ClientScrollWrapper: React.FC<ClientScrollWrapperProps> = ({
  children,
}) => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollableElement = scrollableRef.current;

    // Check if the element has reached its scroll limit on the X-axis

    const handleWheel = (event: WheelEvent) => {
      if (scrollableElement) {
        let hasReachedScrollLimitX =
          scrollableElement.scrollLeft >=
          scrollableElement.scrollWidth - scrollableElement.clientWidth;
          const scrollLeft = scrollableElement.scrollLeft;
        if (hasReachedScrollLimitX) {
          if (event.deltaY < 0) {
            // Calculate the current horizontal scroll position

            // Adjust the horizontal scroll position based on the wheel delta
            scrollableElement.scrollTo({
              left: scrollLeft - event.deltaY,
              behavior: "smooth", // You can use 'auto' or 'smooth' here
            });

            // Prevent default scroll behavior
            event.preventDefault();
          } else {
            return;
          }
        }
        // Calculate the current horizontal scroll position
        // const scrollLeft = scrollableElement.scrollLeft;

        // Adjust the horizontal scroll position based on the wheel delta
        scrollableElement.scrollTo({
          left: scrollLeft + event.deltaY,
          behavior: "smooth", // You can use 'auto' or 'smooth' here
        });

        // Prevent default scroll behavior
        event.preventDefault();
      }
    };

    // Attach the wheel event listener to the scrollable element
    scrollableElement?.addEventListener("wheel", handleWheel);

    return () => {
      // Clean up the event listener when the component is unmounted
      scrollableElement?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      className="h-full overflow-x-scroll no-scrollbar scroll-snap-type-x mandatory"
      ref={scrollableRef}
    >
      {children}
    </div>
  );
};

export default ClientScrollWrapper;
