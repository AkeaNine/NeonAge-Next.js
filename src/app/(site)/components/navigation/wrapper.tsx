"use client"
import { useEffect, useState } from "react";

interface WrapperCompProps {
  children: React.ReactNode;
}

const WrapperComp: React.FC<WrapperCompProps> = ({ children }) => {
  const [Navigation, setNavigation] = useState<React.ReactNode>();

  useEffect(() => {
    setNavigation(children);
  }, [window.location.href]);
  return Navigation;
};

export default WrapperComp;
