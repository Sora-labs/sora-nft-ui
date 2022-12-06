import React, { useRef } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useOnClickOutSide from "../../hooks/useOnClickOutside";
import { MobileSearchbar } from "./searchbar";

interface SearchbarProps {
  isSearch: boolean;
  setIsSearch: any;
}

function SearchbarWithBg({ isSearch, setIsSearch }: SearchbarProps) {
  const ref = useRef() as React.MutableRefObject<HTMLElement>;
  useOnClickOutSide(ref, isSearch ? setIsSearch : undefined);
  return (
    <>
      {isSearch ? (
        <div
          className="fixed z-10 w-screen h-screen top-0 right-0 bottom-0 left-0 bg-light-gray-80 dark:bg-dark-gray-100 dark:bg-opacity-30 bg-opacity-70"
          aria-label="search-mobile-bg"
        >
          <div
            ref={ref as any}
            className="relative w-full h-14 top-0 z-20 bg-light-gray-20 dark:bg-dark-gray-90 px-3 py-3 flex flex-row items-center justify-between outline-none"
          >
            <div className="w-6">
              <AiOutlineArrowLeft
                className="w-full"
                onClick={() => setIsSearch(false)}
              />
            </div>
            <MobileSearchbar />
            <span></span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SearchbarWithBg;
