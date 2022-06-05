import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchbarWithBg from "../Searchbar";

function CenterContent() {
    const [isSearch, setIsSearch] = useState(false)

    return (
        <div>
            <AiOutlineSearch 
                className="w-5 h-5"
                onClick={() => setIsSearch(true)}
            />
            <SearchbarWithBg 
                isSearch={isSearch} 
                setIsSearch={setIsSearch}
            />
        </div>
    );
}

export default CenterContent;