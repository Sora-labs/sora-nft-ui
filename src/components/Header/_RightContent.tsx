import React from "react";
// import { AiOutlineEllipsis } from "react-icons/ai";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";


function RightContent() {
    return (
        <div className="flex flex-row items-center gap-1">
            <ConnectWalletButton></ConnectWalletButton>
            {/* <div className="relative">
                <div className="p-1 bg-dark-gray-80 rounded-md">
                    <AiOutlineEllipsis></AiOutlineEllipsis>
                </div>
                <div className="absolute p-2">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
}

export default RightContent;