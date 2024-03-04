import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to manage swiper reference.
 * @returns A tuple containing the wrapper element and a ref object.
 */
export function useSwiperRef(): [HTMLDivElement | null, React.RefObject<HTMLDivElement>] {
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect hook to set the wrapper element to the ref's current value once it's available.
  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current);
    }
  }, []);

  return [wrapper, ref];
}

/**
 * Function to check if the current index is the last snap index based on the viewport width.
 * @param {number} current - The current index.
 * @returns {boolean} Whether the current index is the last snap index.
 */
export function checkLastSnapIndex(current: number): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const viewportWidth = document.documentElement.clientWidth;

  if (viewportWidth <= 640) {
    return current === 4;
  }

  return current === 3;
}
