import React from "react";
import CenterContent from "./_CenterContent";
import LeftContent from "./_LeftContent";
import RightContent from "./_RightContent";

function Header() {
    return (
        <div className="w-full flex flex-row px-4 py-2 bg-dark-gray-90 justify-between items-center">
            <LeftContent></LeftContent>
            <span className=""></span>
            <span className=""></span>
            <CenterContent></CenterContent>
            <RightContent></RightContent>
        </div>
    );
}

export default Header;