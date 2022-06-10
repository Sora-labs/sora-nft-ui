import React from "react";
import { AiOutlineSearch } from "react-icons/ai";


export const Searchbar = () => {
        
    return (
        <div className="w-10/12 flex flex-row items-center border border-dark-gray-80">
            <div className="w-full">
                <input 
                    type="text" 
                    className="w-full bg-transparent focus:outline-none px-3 py-2" 
                    placeholder="Search"/>
            </div>
            <button className="w-20 px-4 py-3 flex justify-center bg-dark-gray-80">
                <AiOutlineSearch className="w-full text-lg"></AiOutlineSearch>
            </button>
        </div>
    );
}

export const MobileSearchbar = () => {
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