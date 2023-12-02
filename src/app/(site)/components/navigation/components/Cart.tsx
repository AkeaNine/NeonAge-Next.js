"use client";
import { useEffect, useState } from "react";
import CardSheet from "./CardSheet";

function Cart() {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = localStorage.getItem("cart");
      setCart(storedCart ? JSON.parse(storedCart) : []);
      setForceUpdate((prevState) => !prevState);
    };

    handleStorageChange();

    // Listen for changes to localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className="relative">
        <CardSheet cart={cart} />
      </div>
    </div>
  );
}

export default Cart;
