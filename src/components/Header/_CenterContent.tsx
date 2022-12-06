import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IPAD_SIZE } from "../../constants/deviceSizes";
import { useWindowSize } from "../../hooks/useWindowSize";
import SearchbarWithBg from "../Searchbar";
import { Searchbar } from "../Searchbar/searchbar";

function CenterContent() {
  const { width } = useWindowSize();

  return (
    <>
      {width && width > IPAD_SIZE && (
        <div className="flex justify-center w-6/12 absolute top-0 right-0 bottom-0 left-0 my-1.5 mx-auto">
          <div className="w-full mx-auto top-0">
            <Searchbar></Searchbar>
          </div>
        </div>
      )}
    </>
  );
}

export default CenterContent;

export function MobileCenterContent() {
  const [isSearch, setIsSearch] = useState(false);
  const { width } = useWindowSize();
  return (
    <>
      {width && width < IPAD_SIZE && (
        <div>
          <AiOutlineSearch
            className="w-5 h-5"
            onClick={() => setIsSearch(true)}
          />
          <SearchbarWithBg isSearch={isSearch} setIsSearch={setIsSearch} />
        </div>
      )}
    </>
  );
}
