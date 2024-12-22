import { RefObject, useEffect, useState } from "react";

export const useHover = (ref: RefObject<HTMLElement>) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const on = () => setIsHovering(true);
    const off = () => setIsHovering(false);
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseenter", on);
      element.addEventListener("mouseleave", off);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", on);
        element.removeEventListener("mouseleave", off);
      }
    };
  }, [ref]);

  return { isHovering };
};
