import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export const useScrollColor = () => {
  const path = usePathname();
  const isHome = path === "/";

  const [bgColor, setBgColor] = useState(isHome ? "transparent" : "white");
  const [textColor, setTextColor] = useState(isHome ? "white" : "black");
  useEffect(() => {
    if (!isHome) {
      return;
    }
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBgColor("white");
        setTextColor("black");
      } else {
        setBgColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, [isHome]);

  useEffect(() => {
    if (isHome && window.scrollY < 90) {
      setBgColor("transparent");
      setTextColor("white");
    } else {
      setBgColor("white");
      setTextColor("black");
    }
  }, [isHome, path]);

  return { bgColor, textColor };
};
