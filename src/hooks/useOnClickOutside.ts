/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from "react";

const useOnClickOutSide = <T extends HTMLElement>(
  node: RefObject<T | undefined>,
  handler: any
): any => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (node.current?.contains(event.target as Node)) {
        return;
      }
      if (handler) handler(false);
    };

    document.addEventListener("pointerdown", listener);
    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [node, handler]);
};

export default useOnClickOutSide;
