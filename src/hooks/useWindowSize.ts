import { useEffect, useState } from "react";

interface WindowSize {
    width: Number | undefined,
    height: Number | undefined
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {

      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}