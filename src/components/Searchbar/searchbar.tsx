import React from "react";
import { AiOutlineSearch } from "react-icons/ai";


const Searchbar = () => {
        
    return (
        <div className="w-10/12 flex flex-row items-center">
            <div className="w-full">
                <input 
                    autoFocus
                    type="text" 
                    className="w-full bg-transparent border-b border-dark-gray-50 focus:outline-none focus:border-b focus:border-white" 
                    placeholder="Search"/>
            </div>
            <button className="w-12 px-2 py-1 flex justify-center">
                <AiOutlineSearch className="w-full"></AiOutlineSearch>
            </button>
        </div>
    );
}

export default Searchbar;