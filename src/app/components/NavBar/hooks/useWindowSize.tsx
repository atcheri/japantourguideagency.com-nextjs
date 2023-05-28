import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
