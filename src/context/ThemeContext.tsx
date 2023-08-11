"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeContextProps {
  children: React.ReactNode;
}

function ThemeContext({ children }: ThemeContextProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });
  if (!loaded) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default ThemeContext;
