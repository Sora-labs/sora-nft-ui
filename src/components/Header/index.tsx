import React from "react";
import { IPAD_SIZE } from "../../constants/deviceSizes";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Sidebar } from "../Sidebar";
import CenterContent, { MobileCenterContent } from "./_CenterContent";
import LeftContent from "./_LeftContent";
import RightContent from "./_RightContent";

function Header() {
    const {width} = useWindowSize()

    return (
        <div className="w-full flex flex-row px-4 py-2 border-b border-light-gray-10 bg-light-gray-0 justify-between items-center relative">
            <LeftContent></LeftContent>
            { width && width < IPAD_SIZE && <span className=""></span> }
            { width && width < IPAD_SIZE && <span className=""></span> }
            <CenterContent></CenterContent>
            <MobileCenterContent></MobileCenterContent>
            <RightContent></RightContent>
            <Sidebar></Sidebar>
        </div>
    );
}

export default Header;